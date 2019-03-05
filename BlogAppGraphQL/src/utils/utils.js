const { readFileSync } = require("fs");
const { resolve } = require("path");
const request = require("request-promise");
const queryString = require("querystring");

const graphqlFile = filename => readFileSync(resolve("./src/graphql",`${filename}.graphqls`)).toString();
const host = "http://localhost:8000";
module.exports = {
  gqlFile: graphqlFile,
  host,
  fetch: {
    async get (url, data = null) {
      return request(`${ host }/${ url }${ data ? "?" + queryString.stringify(data) : "" }`)
        .then(data => JSON.parse(data))
    },
    async post (url, data = null) {

      return request({
        method: "POST",
        uri: `${ host }/${ url }`,
        form: data
      }).then(data => JSON.parse(data))
    }
  }
};