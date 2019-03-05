import ORM from "./ORM";
import { IClassifyType } from "./Classify";


export interface ICommentType {
    readonly id: string;
    readonly text: string;
    readonly time: string;
    readonly articleId: string;
    readonly userId: string;
}

export interface ICommentTypeRest {
    readonly id?: string;
    readonly text?: string;
    readonly time?: string;
    readonly articleId?: string;
    readonly userId?: string;
}


export default class Comment extends ORM<ICommentType, ICommentTypeRest> {
    public fieldMap  = {
        id: "comment_id",
        text: "comment_text",
        time: "comment_time",
        articleId: "comment_article",
        userId: "comment_user"
    };
    public defaultValue:ICommentType = {
        id: "",
        text: "",
        time: Date.now().toString(),
        articleId: "",
        userId: ""
    };
    public table: string = "comment";
    public map = Object.keys(this.fieldMap).reduce((acc, curKey) => {
        acc[this.fieldMap[curKey]] = curKey;
        return acc
    }, {});
}