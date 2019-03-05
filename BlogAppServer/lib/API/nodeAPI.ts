import * as Express from "express";
import User, { IUserType, IUserTypeRest } from "../SQL/User";
import Article, { IArticleType, IArticleTypeRest } from "../SQL/Article";
import { createHash } from "crypto";
import { IError } from "../SQL/ORM";
import Classify, { IClassifyType, IClassifyTypeRest } from "../SQL/Classify";
import Label, { ILabelType, ILabelTypeRest } from "../SQL/Label";
import Comment, { ICommentType, ICommentTypeRest } from "../SQL/Comment";
import { sqlQuery, ISqlResults } from "../SQL/mysql";
import { queryArticleById, queryCommentById, queryArticleByClassify } from "./query";
import Reply, { IReplyType, IReplyTypeRest } from "../SQL/Reply";

const user = new User();
const article = new Article();
const classify = new Classify();
const label = new Label();
const comment = new Comment();
const reply = new Reply();
const nodeAPI = Express.Router();
type Req = Express.Request;
type Res = Express.Response;
type NextFunc = Express.NextFunction;

interface IResponse extends IError {
    response?: object
}

const { urlencoded } = Express;
const md5 = (data, format) => createHash("md5").update(data).digest().toString(format);
const passwordSalt = "dengpengfei";

/*http://localhost:8000/nodeapi/user?id=xxxxx*/
nodeAPI.get("/user", async (req: Req, res: Res, next: NextFunc) => {
    const id = req.query.id;
    //console.log(id);
    if (id) {
        const results: IUserType = await user.fetch({ id });
        await res.json(results);
    } else {
        throw new Error("you must be send id to this router")
    }
    await next()
});

//login
nodeAPI.post("/user/login", urlencoded({ extended: false }), async (req: Req, res: Res, next: NextFunc) => {
    if (!(req.body.email && req.body.password)) {
        throw new Error("you must be post email, password")
    }
    // console.log("aa", req.body.email, req.body.password);
    let oneUser = (<IUserTypeRest>req.body);
    let email = oneUser.email;
    let results: IUserType = await user.fetch({ email });
    if (Object.entries(results).length) {
        if (md5(oneUser.password + passwordSalt, "hex") === results.password) {
            await res.json(<IResponse>{ err: false, response: results })
        } else {
            await res.json(<IResponse>{ err: true, message: "the password error" })
        }
    } else {
        await res.json(<IResponse>{ err: true, message: "the email not register!" })
    }
    await next();
});

//register
nodeAPI.post("/user/register", urlencoded({ extended: false }), async (req: Req, res: Res, next: NextFunc) => {
    if ((!req.body.email || !req.body.nickname || !req.body.password)) {
        throw new Error("you must be post email, nickname, password")
    }
    //  console.log("okok");
    let oneUser = (<IUserTypeRest>req.body);
    let currentTime: number = Date.now(),
        email = oneUser.email;
    //用户是否已存在
    if (Object.entries(await user.fetch({ email })).length) {
        await res.json(<IResponse>{ err: true, message: "the email: " + email + " has been register!" })
    } else {
        //获取当前时间戳，拼接上email，转md5当作ID
        let id: string = currentTime + email,
            idMd5 = md5(id, "hex"),
            password: string = oneUser.password + passwordSalt,
            passwordMd5 = md5(password, "hex"),
            inputUser: IUserType = Object.assign(user.defaultValue, oneUser, <IUserTypeRest>{
                id: idMd5,
                password: passwordMd5
            });
        const { err, message } = <IError>await user.insert(inputUser);
        await res.json(<IResponse>{
            err, message: err && message,
            response: err || Object.assign(user.defaultValue, <IUserTypeRest>{
                id: idMd5,
                email,
                nickname: oneUser.nickname
            })
        });
    }
    await next()

});

/*http://localhost:8000/nodeapi/article*/
nodeAPI.get("/article", async (req: Req, res: Res, next: NextFunc) => {
    if (!req.query.classify) throw new Error("must give classify");
    const { results, fields } = <ISqlResults>await sqlQuery({
        sql: queryArticleByClassify(req.query.classify),
        timeout: 4000
    });
    // console.log(results);
    const data = results.map(v => Object.keys(v).reduce((acc, curKey) => {
        if (article.map[curKey]) {
            acc[article.map[curKey]] = v[curKey];
        } else if (user.map[curKey]) {
            if (curKey === "user_id") {
                acc["userId"] = v[curKey];
            } else {
                acc[user.map[curKey]] = v[curKey];
            }
        } else if (label.map[curKey]) {
            acc[label.map[curKey]] = v[curKey];
        }
        return acc
    }, {}));
    await res.json(data);
    await next()
});

//发布文章
nodeAPI.post("/article", urlencoded({ extended: false }), async (req: Req, res: Res, next: NextFunc) => {
    if (!req.body.title || !req.body.classify || !req.body.label || !req.body.author || !req.body.text) {
        throw new Error("the argument not ok");
    }
    // console.log(req.body);
    const oneArticle = (<IArticleTypeRest>req.body);
    const authorId = oneArticle.author;
    const currentTime: string = Date.now().toString();
    const articleId = md5(authorId + currentTime, "hex");
    const imgReg = /<img.*?src="(.*?)"/;
    const match = oneArticle.text.match(imgReg);
    console.log(match);
    const image = match ? match[1] ? match[1] : article.defaultValue.image : article.defaultValue.image;
    console.log(image);
    const { err, message } = await article.insert(Object.assign(
        article.defaultValue, {
            id: articleId,
            ...oneArticle,
            publishTime: currentTime,
            image
        }
    ));
    await res.json(<IResponse>{
        err,
        message,
        response: <IArticleTypeRest>{ id: articleId }
    });
    await next()
});
//get article, userInfo by id
nodeAPI.get("/article/id", async (req: Req, res: Res, next: NextFunc) => {
    const id = req.query.id;
    if (!id) throw new Error("need id");
    const { results, fields } = <ISqlResults>await sqlQuery({
        sql: queryArticleById(id),
        timeout: 4000
    });
    if (!results.length) await res.json(<IError>{ err: true, message: "the article not find" });
    let data = Object.keys(results[0]).reduce((acc, curKey) => {
        if (article.map[curKey]) {
            acc[article.map[curKey]] = results[0][curKey];
        } else if (user.map[curKey]) {
            acc[user.map[curKey]] = results[0][curKey];
        } else if (label.map[curKey]) {
            acc[label.map[curKey]] = results[0][curKey];
        }
        return acc;
    }, {});
    await res.json(data);
    await next();
});
//get all classify
nodeAPI.get("/article/classify", async (req: Req, res: Res, next: NextFunc) => {
    const results = await classify.fetchAll();
    await res.json(results);
    await next();
});

//get label by classify
nodeAPI.get("/article/classify/label", async (req: Req, res: Res, next: NextFunc) => {
    const classify = req.query.classify;
    if (!classify) {
        throw new Error("need classify")
    }
    const results = await label.fetchAll({ [label.fieldMap.classify]: classify });
    await res.json(results);
    await next();
});

//get comment by article id
nodeAPI.get("/article/comment", async (req: Req, res: Res, next: NextFunc) => {
    const id = req.query.id;
    if (!id) throw new Error("you must give id");

    const { results, fields } = <ISqlResults>await sqlQuery({
        sql: queryCommentById(id),
        timeout: 4000
    });
    // console.log(results);
    const data = results.map(v => Object.keys(v).reduce((acc, curKey) => {
        if (user.map[curKey]) {
            acc[user.map[curKey]] = v[curKey];
        } else if (comment.map[curKey]) {
            acc[comment.map[curKey]] = v[curKey];
        }
        return acc
    }, {}));
    await res.json(data);
    await next()
});
//post comment
nodeAPI.post("/article/comment", urlencoded({ extended: false }), async (req: Req, res: Res, next: NextFunc) => {
    const body = req.body;
    if (!body.time || !body.articleId || !body.userId || !body.text) {
        throw new Error("you must give some arguments")
    }
    const { time, articleId, text, userId } = <ICommentTypeRest>body;
    const id = md5(userId + articleId + time, "hex");
    const { err, message } = <IError>await comment.insert({ id, time, articleId, text, userId });
    await res.json({ err, message });
    await next();
});

nodeAPI.post("/article/like", urlencoded({ extended: false }), async (req: Req, res: Res, next: NextFunc) => {
    if (!req.body.id) {
        throw new Error("you must provide articleId")
    }
    const id = (<IArticleTypeRest>req.body).id;
    console.log(id);
    const oneArticle = <IArticleType>await article.fetch({ id });
    const likeNumber = oneArticle.likeNumber + 1;
    console.log(likeNumber);
    const { err, message } = await article.update({ likeNumber }, { id });
    await res.json({ err, message });
    await next();
});

nodeAPI.post("/article/read", urlencoded({ extended: false }), async (req: Req, res: Res, next: NextFunc) => {
    if (!req.body.id) {
        throw new Error("you must provide articleId")
    }
    const id = (<IArticleTypeRest>req.body).id;
    const oneArticle = <IArticleType>await article.fetch({ id });
    const readNumber = oneArticle.readNumber + 1;
    console.log(readNumber);
    const { err, message } = <IError>await article.update({ readNumber }, { id });
    await res.json({ err, message });
    await next();
});
nodeAPI.post("/article/comment/reply", urlencoded({ extended: false }), async (req: Req, res: Res, next: NextFunc) => {
    if (!req.body.userId && !req.body.commentId && !req.body.text && !req.body.time) {
        throw new Error("you must give some argument")
    }
    const oneReply = <IReplyTypeRest>req.body;
    const id = md5(oneReply.userId + oneReply.commentId + oneReply.time, "hex");
    const { err, message } = <IError>await reply.insert(Object.assign(reply.defaultValue, {
        id, ...oneReply
    }));
    await res.json({ err, message });
    await next()
});

nodeAPI.get("/article/comment/reply", async (req: Req, res: Res, next: NextFunc) => {
    if (!req.query.id) {
        throw new Error("you must give commentId")
    }
    const id = req.query.id;
    const results = <Array<IReplyType>>await reply.fetchAll({ [reply.fieldMap.id]: id });
    await res.json(results);
    await next()
});

export default nodeAPI;