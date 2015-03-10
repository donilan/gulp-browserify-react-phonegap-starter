var browserify   = require('browserify');
var gulp         = require('gulp');
var gutil        = require('gulp-util');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var del = require('del');
var to5 = require('gulp-6to5'); // this also handles JSX transform

gulp.task('es6to5', ['cleanJs'], function() {
  return gulp.src('./src/js/**/*.jsx')
    .pipe(to5()).on('error', handleErrors)
    .pipe(gulp.dest('./tmp/js/es5'));
});

gulp.task('cleanJs', function(cb) {
  del(['./tmp/js/'], cb);
});

gulp.task('browserify', ['es6to5'], function(){

    // TODO maybe it's worth trying to integrate watchify
    return browserify({
        entries: ['./src/js/app.js'],
        extensions: ['.jsx'],
        paths: ['./node_modules','./tmp/js/es5/']
    })
        .bundle({debug: true})
        .on('error', handleErrors)
        .pipe(source('app.js'))
        .pipe(gulp.dest('./www'));

});
