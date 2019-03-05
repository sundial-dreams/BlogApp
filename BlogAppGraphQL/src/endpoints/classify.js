const { fetch } = require("../utils/utils");
async function classify() {
  console.log(await fetch.get("nodeapi/article/classify"));
  return await fetch.get("nodeapi/article/classify");
}

module.exports = {
  classify
};
