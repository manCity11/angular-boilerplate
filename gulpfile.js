const gulp = require("gulp");

const clean = require("./tasks/clean");
const bundle = require("./tasks/bundle");
const connect = require("./tasks/connect");
const mergeLocales = require("./tasks/locales");

gulp.task("clean", clean);
gulp.task("merge-locales", mergeLocales);
gulp.task("build", gulp.series(["clean", "merge-locales"], bundle));
gulp.task("serve", gulp.series(["merge-locales"], connect));
