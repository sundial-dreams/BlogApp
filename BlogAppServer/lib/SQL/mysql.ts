import * as MySql from "mysql";

const mysqlPool = MySql.createPool({
    host: "cdb-3xgx1lpe.cd.tencentcdb.com",
    user: "root",
    password: "2031163243abcd",
    port: 10005,
    database: "blogapp",
    connectionLimit: 10000
});

const timeout = 4000;

export interface ISqlResults {
    results: Array<any>;
    fields: Object;
}

interface IQueryObject {
    [name: string]: string | number
}

export const sqlQuery = (sql: MySql.QueryOptions) => new Promise((resolve, reject) =>
    mysqlPool.query(sql,
        (err, results, fields) => err ? reject(err) : resolve(<ISqlResults>{ results, fields })
    )
);

export const and = (dataObject: IQueryObject) => {
    let queryString = "";
    Object.keys(dataObject).forEach(key => {
        queryString += MySql.escape(key) + "=" + dataObject[key] + " and "
    });
    return queryString.replace(/\sand\s$/, "")
};

export const tableQuery = (table: string, condition: IQueryObject | string) => sqlQuery({
    sql: typeof condition === "string" ?
        MySql.format("select * from ?? where ??", [table, condition]) :
        MySql.format("select * from ?? where ?", [table, condition]),
    timeout
});


export const insertTable = (table: string, data: IQueryObject | Array<string | number>) => sqlQuery({
    sql: Array.isArray(data) ?
        MySql.format("insert into ?? values(??)", [table, (<Array<string | number>>data).join(", ")]) :
        MySql.format("insert into ?? set ?", [table, data]),
    timeout
});

export const updateTable = (table: string, update: IQueryObject, condition: IQueryObject | string) => sqlQuery({
    sql: typeof condition === "string" ?
        MySql.format("update ?? set ? where ??", [table, update, condition]) :
        MySql.format("update ?? set ? where ?", [table, update, condition]),
    timeout
});

export const deleteRow = (table: string, condition: IQueryObject | string) => sqlQuery({
    sql: typeof condition === "string" ?
        MySql.format("delete from ?? where ??", [table, condition]) :
        MySql.format("delete from ?? where ?", [table, condition]),
    timeout
});

export default mysqlPool;
