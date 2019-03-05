const Router = require("./util/router");
module.exports = {
  router: new Router()
    .register("/", "/index")
};