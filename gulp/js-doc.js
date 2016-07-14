var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');

gulp.task('js-doc', function (cb) {
  var config = require('../.js-doc-config.json');
  gulp.src(['README.md', './src/**/*.js'], {read: false})
      .pipe(jsdoc(config, cb));
});
