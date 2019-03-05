const withLess = require("@zeit/next-less");
const withStylus = require("@zeit/next-stylus");
const withTypeScript = require("@zeit/next-typescript");
const withCss = require("@zeit/next-css");
const { resolve } = require("path");
//webpack or next.js config
const NextConfig = () => ({
  cssModules: true,
  cssLoaderOptions: {
    importLoader: 20,
    localIdentName: "[local]___[hash:base64:10]"
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  webpack (config, options) {
    config.resolve.alias = {
      components: resolve("./components"),
      utils: resolve("./utils"),
      reducer: resolve("./reducer"),
      actions: resolve("./actions"),
      GQL: resolve("./GQL"),
      store: resolve("./store"),
    };
    return config
  }
});

//next.js config object
module.exports =
  withTypeScript(
    withStylus(
      withLess(
        withCss(
           NextConfig()
        )
      )
    )
  );