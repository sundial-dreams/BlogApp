const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLNonNull, GraphQLString } = require("graphql");
const Types = require("./Types");
const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      types: new GraphQLNonNull(Types.UserType),
      args: {
        id: new GraphQLNonNull(GraphQLID)
      },
      resolve (_, { id }) {

      }
    }
  }
});
const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {}
});
const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  types: Object.keys(Types).map(k => Types[k])
});
module.exports = {
  schema
};