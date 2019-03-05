import ORM from "./ORM";

export interface IClassifyType {
    readonly name: string;
    readonly description: string,
    readonly picture: string
}

export interface IClassifyTypeRest {
    readonly name?: string;
    readonly description?: string,
    readonly picture?: string
}

export default class Classify extends ORM<IClassifyType,IClassifyTypeRest> {
    public fieldMap  = {
        name:"classify_name",
        description: "classify_description",
        picture: "classify_picture"
    };
    public defaultValue:IClassifyType = {
        name: "",
        description: "",
        picture: ""
    };
    public table: string = "classify";
    public map = Object.keys(this.fieldMap).reduce((acc, curKey) => {
        acc[this.fieldMap[curKey]] = curKey;
        return acc
    }, {});
}


