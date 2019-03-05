import { sqlQuery, insertTable, deleteRow, tableQuery, updateTable, ISqlResults } from "./mysql";
import { format } from "mysql";

export interface IField {
    [name: string]: string | number
}

export interface IError {
    err: boolean;
    message?: string;
}

export interface IORM<TableType, TableTypeRest> {
    fieldMap: IField;
    map: IField;
    table: string;
    defaultValue: TableType;

    fetchAll (condition: TableTypeRest | string): Promise<Array<TableType>>;

    fetch (query: TableTypeRest | string): Promise<TableType>;

    insert (data: TableType): Promise<IError>;

    update (data: TableTypeRest, condition: TableTypeRest | string): Promise<IError>;

    delete (condition: TableTypeRest | string): Promise<IError>;
}

//ORM framework
export default class ORM<Type, TypeRest> implements IORM<Type, TypeRest> {
    public fieldMap: IField;
    public map: IField;
    public table: string;
    public defaultValue: Type;

    public async delete (condition: TypeRest | string): Promise<IError> {
        const dbCondition: IField | string = typeof condition === "string" ? condition :
            Object.keys(condition).reduce((acc, curKey) => {
                acc[this.fieldMap[curKey]] = condition[curKey];
                return acc;
            }, {});
        const { results, fields } = <ISqlResults>await deleteRow(this.table, dbCondition);
        return results ? <IError>{ err: false } :
            <IError>{
                err: true,
                message: "you have err on delete from " + this.table
            };
    }

    public async fetch (query: TypeRest | string): Promise<Type> {
        const dbQuery: IField = typeof query === "string" ? query :
            Object.keys(query).reduce((acc, curKey) => {
                acc[this.fieldMap[curKey]] = query[curKey];
                return acc;
            }, {});
        let { results, fields } = <ISqlResults>await tableQuery(this.table, dbQuery);

        results.length || (results = [{}]);
        Array.isArray(results) && (results = results[0]);
        return <Type>Object.keys(results).reduce((acc, curKey) => {
            acc[this.map[curKey]] = results[curKey];
            return acc
        }, {});
    }

    public async fetchAll (condition?: TypeRest | string): Promise<Array<Type>> {

        const { results, fields } = <ISqlResults>await sqlQuery({
            sql: !condition ? format("select * from ??", [this.table]) :
                typeof condition === "string" ?
                    format("select * from ?? where ??", [this.table, condition]) :
                    format("select * from ?? where ?", [this.table, condition]),
            timeout: 2000
        });

        return <Array<Type>>results.map(value => Object.keys(value).reduce((acc, curKey) => {
            acc[this.map[curKey]] = value[curKey];
            return acc;
        }, {}));
    }

    public async insert (data: Type): Promise<IError> {
        const dbData: IField = Object.keys(data).reduce((acc, curKey) => {
            acc[this.fieldMap[curKey]] = data[curKey];
            return acc;
        }, {});
        const { results } = <ISqlResults>await insertTable(this.table, dbData);
        return results ? <IError>{ err: false } : <IError>{ err: true, message: "you have some error in insert data" };
    }

    public async update (data: TypeRest, condition: TypeRest | string): Promise<IError> {
        const dbData: IField = Object.keys(data).reduce((acc, curKey) => {
            acc[this.fieldMap[curKey]] = data[curKey];
            return acc;
        }, {});
        const dbCondition: IField | string = typeof condition === "string" ? condition : Object.keys(condition).reduce((acc, curKey) => {
            acc[this.fieldMap[curKey]] = condition[curKey];
            return acc;
        }, {});
        console.log(dbData,dbCondition);
        const { results } = <ISqlResults>await updateTable(this.table, dbData, dbCondition);
        return results ? <IError>{ err: false } : { err: true, message: "you have message in update" };
    }
}
