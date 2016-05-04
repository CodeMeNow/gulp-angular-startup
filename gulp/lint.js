var gulp = require('gulp');
var path = require('path');
var conf = require('./conf');
var eslint = require('gulp-eslint');

gulp.task('lint', function lint() {
  return gulp.src([path.join(conf.paths.src, '/app/**/*.js'), '!node_modules/**', '!src/app/libs/vendor/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
