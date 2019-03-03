module.exports = () => {
  const gulp = require("gulp");
  const webpack = require("webpack");
  const WebpackDevServer = require("webpack-dev-server");
  const { port } = require("./build-config");
  let config = require("./webpack.config")();

  config.entry.app.unshift(
    `webpack-dev-server/client?http://localhost:${port}/`,
    "webpack/hot/dev-server"
  );

  const compiler = webpack(config);
  const server = new WebpackDevServer(compiler, {
    hot: true
  });
  server.listen(port);
  gulp.watch("src/**/locales/[A-z]*.json", gulp.series("merge-locales"));
};
