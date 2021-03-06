module.exports = () => {
  const webpack = require("webpack");
  const path = require("path");
  const { src, port } = require("./build-config");
  const { isProd } = require("./helpers/env-helpers");

  const indexHtml = require("./webpack-loaders/indexHtml")();
  const tsLoader = require("./webpack-loaders/ts-loader")();
  const htmlLoader = require("./webpack-loaders/html-loader")();

  let config = {
    mode: isProd ? "production" : "development",
    entry: src.entries,
    output: {
      path: path.resolve(__dirname, "../dist/root"),
      filename: "bundle.js"
    },
    module: {
      rules: [tsLoader, htmlLoader]
    },
    resolve: {
      extensions: [".js", ".ts"]
    },
    plugins: [
      indexHtml,
      new webpack.ProvidePlugin({
        _: "lodash"
      })
    ],
    devServer: {
      port
    }
  };

  return config;
};
