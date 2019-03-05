import ORM from "./ORM";

export interface IUserType {
    readonly id: string;
    readonly nickname: string;
    readonly email: string;
    readonly password: string;
    readonly picture: string;
    readonly position: string;
    readonly company: string;
    readonly description: string;
    readonly text: string;
    readonly createTime: string;
}

export interface IUserTypeRest {
    readonly id?: string;
    readonly nickname?: string;
    readonly email?: string;
    readonly password?: string;
    readonly picture?: string;
    readonly position?: string;
    readonly company?: string;
    readonly description?: string;
    readonly text?: string;
    readonly createTime?: string;
}

export default class User extends ORM<IUserType, IUserTypeRest> {
    public fieldMap = {
        id: "user_id",
        nickname: "user_nickname",
        email: "user_email",
        password: "user_password",
        picture: "user_picture",
        position: "user_position",
        company: "user_company",
        description: "user_description",
        text: "user_text",
        createTime: "user_create_time"
    };
    public defaultValue: IUserType = {
        id: "",
        nickname: "",
        email: "",
        password: "",
        picture: "/static/img/test-head.jpg",
        position: "",
        company: "",
        description: "",
        text: "",
        createTime: Date.now().toString()
    };
    public table: string = "user";

    public map = Object.keys(this.fieldMap).reduce((acc, curKey) => {
        acc[this.fieldMap[curKey]] = curKey;
        return acc
    }, {});
}
const user = new User();
user.fetchAll().then(da => {
    console.log(da)
});