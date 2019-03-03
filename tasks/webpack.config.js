module.exports = () => {
  const webpack = require("webpack");
  const path = require("path");
  const { src, port } = require("./build-config");
  const { isProd } = require("./helpers/env-helpers");

  const indexHtml = require("./webpack-loaders/indexHtml")();
  const tsLoader = require("./webpack-loaders/ts-loader")();
  const htmlLoader = require("./webpack-loaders/html-loader")();
  const styleLoader = require("./webpack-loaders/style-loader")();

  let config = {
    mode: isProd ? "production" : "development",
    entry: src.entries,
    output: {
      path: path.resolve(__dirname, "../dist"),
      filename: "bundle.js"
    },
    module: {
      rules: [tsLoader, htmlLoader, styleLoader]
    },
    resolve: {
      extensions: [".js", ".ts"]
    },
    plugins: [
      indexHtml,
      new webpack.HotModuleReplacementPlugin(),
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
