const { fetch } = require("../utils/utils");

async function user ({ id }) {
  return await fetch.get("nodeapi/user", { id })
}

async function createUser ({ input }) {
  console.log(input, typeof input);
  return await fetch.post("nodeapi/user/register", input)
}

async function login ({ email, password }) {
  return await fetch.post("nodeapi/user/login", { email, password })
}

module.exports = {
  user,
  createUser,
  login
};