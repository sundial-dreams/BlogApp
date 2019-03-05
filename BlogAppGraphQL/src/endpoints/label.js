const { fetch } = require("../utils/utils");

async function labelByClassify ({ classify }) {
  return await fetch.get("nodeapi/article/classify/label", { classify })
}

module.exports = {
  labelByClassify
};