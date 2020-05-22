const path = require("path");
const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  mode: "production",
  entry: [path.join(__dirname, "webpack", "js", "app.js"), path.join(__dirname, "webpack", "styles", "app.css")],
  output: {
    path: path.resolve(__dirname, "static", "assets"),
    filename: "webpacked.js",
  },
  module: {
    rules: [loaders.JSLoader, loaders.ESLintLoader, loaders.CSSLoader],
  },
  plugins: [plugins.MiniCssExtractPlugin, plugins.StyleLintPlugin],
  resolve: {
    extensions: [".json", ".js"],
  },
};
