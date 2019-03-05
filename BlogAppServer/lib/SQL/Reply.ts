import ORM from "./ORM";

export interface IReplyType {
    readonly id: string;
    readonly text: string;
    readonly userId: string;
    readonly commentId: string;
    readonly time: string;
}

export interface IReplyTypeRest {
    readonly id?: string;
    readonly text?: string;
    readonly userId?: string;
    readonly commentId?: string;
    readonly time?: string;
}

export default class Reply extends ORM<IReplyType, IReplyTypeRest> {
    public fieldMap = {
        id: "reply_id",
        text: "reply_text",
        userId: "reply_user",
        commentId: "comment_id",
        time: "reply_time"
    };
    public defaultValue: IReplyType = {
        id: "",
        text: "",
        userId: "",
        commentId: "",
        time: Date.now().toString()
    };
    public table: string = "reply";

    public map = Object.keys(this.fieldMap).reduce((acc, curKey) => {
        acc[this.fieldMap[curKey]] = curKey;
        return acc
    }, {});
}
