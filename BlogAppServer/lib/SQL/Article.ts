import ORM from "./ORM";

export interface IArticleType {
    readonly id: string;
    readonly title: string;
    readonly classify: string;
    readonly label: string;
    readonly author: string;
    readonly text: string;
    readonly publishTime: string;
    readonly readNumber: number;
    readonly likeNumber: number;
    readonly commentNumber: number;
    readonly collectionNumber: number;
    readonly shareNumber: number;
    readonly image: string;
}

export interface IArticleTypeRest {
    readonly id?: string;
    readonly title?: string;
    readonly classify?: string;
    readonly label?: string;
    readonly author?: string;
    readonly text?: string;
    readonly publishTime?: string;
    readonly readNumber?: number;
    readonly likeNumber?: number;
    readonly commentNumber?: number;
    readonly collectionNumber?: number;
    readonly shareNumber?: number;
    readonly image?: string;
}

export default class Article extends ORM<IArticleType, IArticleTypeRest> {
    public fieldMap = {
        id: "id",
        title: "article_title",
        classify: "article_classify",
        label: "article_label",
        author: "article_author",
        text: "article_text",
        publishTime: "publish_at",
        readNumber: "read_num",
        likeNumber: "like_num",
        commentNumber: "comment_num",
        collectionNumber: "collection_num",
        shareNumber: "share_num",
        image: "article_image"
    };
    public table: string = "article";
    public defaultValue: IArticleType = {
        id: "",
        title: "",
        classify: "",
        label: "",
        author: "",
        text: "",
        publishTime: Date.now().toString(),
        readNumber: 0,
        likeNumber: 0,
        commentNumber: 0,
        collectionNumber: 0,
        shareNumber: 0,
        image: ""
    };

    public map = Object.keys(this.fieldMap).reduce((acc, curKey) => {
        acc[this.fieldMap[curKey]] = curKey;
        return acc
    }, {});
}