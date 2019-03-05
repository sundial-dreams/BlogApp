const express = require("express");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");
const { buildSchema } = require("graphql");
const { gqlFile } = require("./utils/utils");
const user = require("./endpoints/user");
const article = require("./endpoints/article");
const classify = require("./endpoints/classify");
const label = require("./endpoints/label");
const comment = require("./endpoints/comment");
const { schema: Schema } = require("./graphQLTypes/Schema");
const app = express();
const schema = buildSchema(gqlFile("schema"));

const root = {
  ...user,
  ...article,
  ...classify,
  ...label,
  ...comment
};

/*app.use("/graphql", cors({}), graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));*/
app.use("/graphql", cors({}), graphqlHTTP({
  schema: Schema,
  graphqli: true
}));
app.listen(8769, err =>
  console.log(err || "graphql server build in http://localhost:8769/graphql")
);