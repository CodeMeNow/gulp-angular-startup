'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var gutil = require('gulp-util');


var browserSync = require('browser-sync');
var webpack = require('webpack-stream');

var $ = require('gulp-load-plugins')();


function webpackWrapper(watch, test, callback) {
  var webpackOptions = {
    watch: watch,
    module: {
      preLoaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader'}],
      loaders: [{ test: /\.js$/, exclude: /node_modules/, loaders: ['ng-annotate', 'babel-loader']}]
    },
    output: { filename: 'index.module.js' }
  };

  if(watch) {
    webpackOptions.devtool = 'inline-source-map';
  }

  var webpackChangeHandler = function(err, stats) {
    if(err) {
      conf.errorHandler('Webpack')(err);
    }
    $.util.log(stats.toString({
      colors: $.util.colors.supportsColor,
      chunks: false,
      hash: false,
      version: false
    }));
    browserSync.reload();
    if(watch) {
      watch = false;
      callback();
    }
  };

  var sources = [ path.join(conf.paths.src, '/app/index.module.js') ];
  if (test) {
    sources.push(path.join(conf.paths.src, '/app/**/*.spec.js'));
  }

  return gulp.src(sources)
    .pipe(webpack(webpackOptions, null, webpackChangeHandler))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
}

gulp.task('ngConstants', function (){
  var env = gutil.env.env ? gutil.env.env : 'development';
  var constants = require('../src/app/common/constants/ng-constants.json');
  var localConstants = {};

  if (env === 'development') {
    try {
      delete require.cache[require.resolve('../src/app/common/constants/local-constants.json')];
      localConstants = require('../src/app/common/constants/local-constants.json');
    } catch (e) {
      gutil.log(gutil.colors.red('You should create your personal ' +
        '/src/app/common/constants/local-constants.json which contain development configs'));
    }
  }
  // console.log(localConstants);
  for (var prop in localConstants) {
    constants[prop] = localConstants[prop];
  }
  var constant = constants[env];

  return $.ngConstant({
    constants: constant,
    name: 'env.constants',
    templatePath: 'gulp/ngConstants/ng-constants.tpl.ejs',
    stream: true
  })
  .pipe(gulp.dest('src/app/common/constants'));
});

gulp.task('scripts', ['ngConstants'], function () {
  return webpackWrapper(false, false);
});

gulp.task('scripts:watch', ['scripts'], function (callback) {
  return webpackWrapper(true, false, callback);
});

gulp.task('scripts:test', function () {
  return webpackWrapper(false, true);
});

gulp.task('scripts:test-watch', ['scripts'], function (callback) {
  return webpackWrapper(true, true, callback);
});
