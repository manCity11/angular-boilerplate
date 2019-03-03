module.exports = () => {
  const { src } = require("../build-config");

  const rule = {
    test: /\.ts$/,
    include: [src.appPath],
    use: ["ts-loader"]
  };

  return rule;
};
