module.exports = () => {
  let rule = {
    test: /\.(scss|css)$/,
    use: ["style-loader", "css-loader", "sass-loader"]
  };

  return rule;
};
