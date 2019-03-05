const { fetch } = require("../utils/utils");

async function commentByArticleId ({ id }) {
  console.log(id);
  return await fetch.get("nodeapi/article/comment", { id });
}

async function createComment ({ input }) {
  console.log(input);
  return await fetch.post("nodeapi/article/comment", input)
}

async function replyByComment ({ id }) {
  console.log(id);
  return await fetch.get("nodeapi/article/comment/reply", { id })
}


async function replyComment ({ input }) {
  return await fetch.post("nodeapi/article/comment/reply", input)
}

module.exports = {
  commentByArticleId,
  createComment,
  replyComment,
  replyByComment
};
