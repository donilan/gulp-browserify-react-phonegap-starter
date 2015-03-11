var gulp = require('gulp');
var recess = require('gulp-recess');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');
var handleErrors = require('../util/handleErrors');

gulp.task('fonts', function() {
  return gulp.src('node_modules/node_modules/ratchet/dist/fonts/*.*')
    .pipe(flatten())
    .pipe(gulp.dest('./www/fonts'));
});

gulp.task('styles', ['fonts'], function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass()).on('error', handleErrors)
    .pipe(gulp.dest('./www'));
});
