const gulp = require("gulp");

module.exports = cb => {
  const { src, dest, langs } = require("./build-config");
  const sortJSON = require("gulp-json-sort").default;
  const mergeJson = require("gulp-merge-json");
  const _ = require("lodash");

  _.each(langs, lang => {
    gulp
      .src(`${src.locales}${lang}.json`)
      .pipe(sortJSON())
      .pipe(
        mergeJson({
          fileName: `locales-${lang}.json`
        })
      )
      .pipe(gulp.dest(dest.locales));

    cb();
  });
};
