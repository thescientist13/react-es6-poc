'use strict';

var gulp = require('gulp');
var validatePipeline = require('pipeline-validate-js');

gulp.task('lint', function() {
  return gulp.src(['!./config.js', './*.js'])
    .pipe(validatePipeline.validateJS());
});

gulp.task('build', ['lint']);

gulp.task('default', ['build']);