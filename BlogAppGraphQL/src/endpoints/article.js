const { fetch } = require("../utils/utils");

async function article ({ classify }) {
  console.log(classify);
  return await fetch.get("nodeapi/article", classify && { classify })
}

async function articleById ({ id }) {
  console.log(id);
  return await fetch.get("nodeapi/article/id", { id });
}

async function createArticle ({ input }) {
  console.log(input);
  return await fetch.post("nodeapi/article", input)
}

async function articleLike ({ id }) {
  return await fetch.post("nodeapi/article/like", { id });
}

async function articleRead ({ id }) {
  return await fetch.post("nodeapi/article/read", { id });
}
async function oneTest({ id }) {
  return {
    A: 1,
    B: "222",
    C: "333"
  }
}


module.exports = {
  article,
  articleById,
  createArticle,
  articleLike,
  articleRead,
  oneTest
};
