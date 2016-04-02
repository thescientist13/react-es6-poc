var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var validatePipeline = require('pipeline-validate-js');
var vinyl = require('vinyl-source-stream');

gulp.task('lint:js', function() {
  return gulp.src('./*.js')
    .pipe(validatePipeline.validateJS());
});

gulp.task('build', function () {
  return browserify({
      entries: './app.jsx',
      extensions: ['.jsx'],
      debug: true
    })
    .transform('babelify', {
      presets: ['es2015', 'react']
    })
    .bundle()
    .pipe(vinyl('bundle.js'))
    .pipe(gulp.dest('dest'));
});

gulp.task('develop', ['build'], function () {
  gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['build']);