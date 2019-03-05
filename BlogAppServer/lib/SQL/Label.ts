import ORM from "./ORM";

export interface ILabelType {
    readonly id: string;
    readonly name: string;
    readonly picture: string;
    readonly classify: string;
    readonly description: string;
}

export interface ILabelTypeRest {
    readonly id?: string;
    readonly name?: string;
    readonly picture?: string;
    readonly classify?: string;
    readonly description?: string;
}

export default class Label extends ORM<ILabelType,ILabelTypeRest>{
    public fieldMap  = {
        id:"label_id",
        name:"label_name",
        picture:"label_picture",
        classify:"label_classify",
        description:"label_description"
    };
    public defaultValue:ILabelType = {
        id:"",
        name:"",
        picture:"",
        classify:"",
        description:""
    };
    public table: string = "label";
    public map = Object.keys(this.fieldMap).reduce((acc, curKey) => {
        acc[this.fieldMap[curKey]] = curKey;
        return acc
    }, {});
}