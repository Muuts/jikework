var postcss = require('gulp-postcss');
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var csswring = require("csswring");
var mqpacker = require("css-mqpacker");
var autoprefixer = require('autoprefixer');

/*配置一个default任务*/
gulp.task('default', function () {
    var plugins = [
        autoprefixer({browsers:"last 4 versions"}),
        mqpacker,
        csswring
    ];
    return gulp.src('./src/*.less')
        .pipe(less())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./style'));
});