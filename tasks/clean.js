const del = require("del");
const { dest } = require("./build-config");
const gulp = require("gulp");
const { isProd } = require("./helpers/env-helpers");

module.exports = gulp.task("clean", cb => {
  const dirs = [dest.distPath];
  if (isProd) {
    dirs.push(dest.tmp);
  }
  return del(dirs, cb);
});
