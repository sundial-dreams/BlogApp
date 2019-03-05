const { parse } = require("url");
//RouterHandle class, handle server router

module.exports = class RouterHandle {
  constructor () {
    this._routerMap = new Map();
  }

  register (pathname, page) {
    this._routerMap.set(pathname, page);
    return this
  }

  async handle (app, req, res, handle) {
    const parseUrl = parse(req.url, true);
    const { pathname, query } = parseUrl;
    if (this._routerMap.get(pathname)) {
      await app.render(req, res, this._routerMap.get(pathname), query);
    } else {
      await handle(req, res, parseUrl);
    }
  }
};