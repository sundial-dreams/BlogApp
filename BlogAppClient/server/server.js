const { createServer } = require("http");
const { router } = require("./routerConfig");
const next = require("next");
//next.js server
const app = next({ dev: true });
const handle = app.getRequestHandler();

app.prepare().then(
  () => {
    createServer(async (req, res) => {
      await router.handle(app, req, res, handle);
    }).listen(3000, err =>
      err ? console.log(err) : console.log("> Ready on http://localhost:3000")
    )
  }
);