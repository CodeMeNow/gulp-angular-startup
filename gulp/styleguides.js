var kss = require('kss');
var gulp = require('gulp');
var styleguide = require('sc5-styleguide');
var outputPath = 'sc5-styleguide';

gulp.task('kss-styleguide', function() {
  return kss({
    source: 'src/app',
    destination: 'kss-styleguide',
    css: '../.tmp/serve/app/style.css',
    homepage: 'src/app/styles/style-overview.md'
  });
});

gulp.task('styleguide:generate', function() {
  return gulp.src('src/app/**/*.scss')
    .pipe(styleguide.generate({
        title: 'Styleguide',
        server: true,
        rootPath: outputPath,
        overviewPath: 'src/app/styles/style-overview.md'
      }))
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide:applystyles', function() {
  return gulp.src('.tmp/serve/app/style.css')
    .pipe(styleguide.applyStyles())
    .pipe(gulp.dest(outputPath));
});

gulp.task('styleguide', ['styleguide:generate', 'styleguide:applystyles']);

gulp.task('watch:styleguide', ['styleguide'], function() {
  gulp.watch(['src/app/**/*.scss'], ['styleguide']);
});
