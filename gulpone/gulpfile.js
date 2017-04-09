var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');


gulp.task('default', function() {
  // 将你的默认的任务代码放在这

  //获取js文件夹下的所有js文件
gulp.src('js/*.js')
	//对文件进行压缩
	.pipe(uglify())
	//将与其所后的，传到all.min.js中
	.pipe(concat("all.min.js"))
	//再设置到bild文件夹内
	.pipe(gulp.dest('bild'));
});