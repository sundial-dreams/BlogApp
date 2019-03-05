const express = require("express");
const graphql = require("graphql");
const graphqlHTTP = require("express-graphql");

const userType = new graphql.GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: graphql.GraphQLString },
    name: { type: graphql.GraphQLString }
  }
});
const AType = new graphql.GraphQLInterfaceType({
  name: "AType",
  fields: {
    A: { type: graphql.GraphQLString },
  },
  resolveType (value) {
    console.log(value);
    if (value.B) return AAType;
  }
});
const AAType = new graphql.GraphQLObjectType({
  interfaces: [AType],
  name: "AAType",
  fields: {
    A: { type: graphql.GraphQLString },
    B: { type: graphql.GraphQLString }
  },
  isTypeOf: value => value.B
});
const queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: userType,
      args: {
        id: { type: graphql.GraphQLString }
      },
      resolve (_, { id }) {
        return {
          id: id,
          name: "aaa"
        }
      }
    },
    test: {
      type: AType,
      args: {
        A: { type: graphql.GraphQLString }
      },
      resolve (_, { A }) {
        return {
          A,
          B: "B"
        }
      }
    }
  }
});

const schema = new graphql.GraphQLSchema({
  query: queryType,
  types: [AAType, AType, userType]
});
const app = express();
app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));
app.listen(9000, () => {
  console.log("listen in 9000");
});