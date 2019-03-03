const minimist = require("minimist");

let options = minimist(process.argv.slice(2));
let env = options.env || "dev";
let [main, sub] = env.split(":");

module.exports = {
  main,
  sub,
  isProd: main === "prod",
  options
};
