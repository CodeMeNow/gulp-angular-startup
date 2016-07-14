// dependencies
var gulp = require('gulp'),
    git = require('gulp-git'),
    bump = require('gulp-bump'),
    filter = require('gulp-filter'),
    tag_version = require('gulp-tag-version');
    $ = require('gulp-load-plugins')();

function inc(importance) {
  return gulp.src(['./package.json', './bower.json'])
      .pipe(bump({type: importance, preid: 'rc'}))
      .pipe(gulp.dest('./'))
      .pipe(git.commit('bumps package version'))
      .pipe($.filter('package.json'))
      .pipe(tag_version());
}

gulp.task('patch', function() {
  return inc('patch');
});
gulp.task('minor', function() {
  return inc('minor');
});
gulp.task('major', function() {
  return inc('major');
});
gulp.task('rc', function() {
  return inc('prerelease');
});
