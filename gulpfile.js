var gulp = require('gulp'),
    sass = require('gulp-sass');
var server = require('gulp-server-livereload');

gulp.task('webserver', function () {
    gulp.src('./')
        .pipe(server({
            livereload: {
                enable: true,
                filter: function (filePath, cb) {
                    cb(!(/node_modules/.test(filePath)));
                },
              },
            defaultFile: 'app/index.html',
            fallback: 'app/index.html',
            open: true
        }));
});

gulp.task('sass', function(){
return gulp.src('sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css/'))
});

gulp.task('watch', function(){
    gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('default', ['watch']);