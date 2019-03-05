const {
  GraphQLString, GraphQLObjectType, GraphQLSchema,
  GraphQLBoolean, GraphQLInterfaceType, GraphQLEnumType,
  GraphQLID, GraphQLInt, GraphQLList, GraphQLUnionType,
  GraphQLNonNull, GraphQLInputObjectType
} = require("graphql");
const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    nickname: { type: GraphQLString },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    avatar: { type: GraphQLString },  // 头像
    position: { type: GraphQLString },
    company: { type: GraphQLString },
    description: { type: GraphQLString },
    motto: { type: GraphQLString }, // 格言
    createTime: { type: GraphQLString }
  },
  description: "用户类型"
});
const ArticleType = new GraphQLObjectType({
  name: "Article",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    classify: { type: new GraphQLNonNull(GraphQLString) },
    label: { type: new GraphQLNonNull(GraphQLString) },
    author: { type: new GraphQLNonNull(GraphQLString) },
    body: { type: new GraphQLNonNull(GraphQLString) },
    publishTime: { type: new GraphQLNonNull(GraphQLString) },
    readNumber: { type: new GraphQLNonNull(GraphQLInt) },
    likeNumber: { type: new GraphQLNonNull(GraphQLInt) },
    commentNumber: { type: new GraphQLNonNull(GraphQLInt) },
    collectNumber: { type: new GraphQLNonNull(GraphQLInt) },
    shareNumber: { type: new GraphQLNonNull(GraphQLInt) },
    mainImage: { type: new GraphQLNonNull(GraphQLString) }
  },
  description: "文章类型"
});
const ClassifyType = new GraphQLObjectType({
  name: "Classify",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString },
    image: { type: GraphQLString }
  }
});
const LabelType = new GraphQLObjectType({
  name: "Label",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLID) },
    image: { type: new GraphQLNonNull(GraphQLString) },
    classify: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: GraphQLString }
  }
});
const ReplyType = new GraphQLObjectType({
  name: "Reply",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    text: { type: new GraphQLNonNull(GraphQLString) },
    userId: { type: new GraphQLNonNull(GraphQLString) },
    commentId: { type: new GraphQLNonNull(GraphQLString) },
    time: { type: new GraphQLNonNull(GraphQLString) },
  }
});
module.exports = {
  UserType, ArticleType, ClassifyType, LabelType, ReplyType
};