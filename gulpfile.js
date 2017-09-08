var gulp = require('gulp'),
sass = require('gulp-sass');

gulp.task('sass', function(){
return gulp.src('sass/*.sass')
.pipe(sass())
.pipe(gulp.dest('app/css/'))
});

gulp.task('watch', function(){
gulp.watch('sass/*.sass', ['sass']);
});
gulp.task('default', ['watch']);