module.exports = () => {
  const { isProd } = require("../helpers/env-helpers");

  const rule = {
    test: /\.html$/,
    use: [
      {
        loader: "html-loader",
        options: {
          minimize: !isProd
        }
      }
    ]
  };

  return rule;
};
