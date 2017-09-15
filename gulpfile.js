var gulp = require('gulp'),
    sass = require('gulp-sass'),
    git = require('gulp-git'),
    browserSync  = require('browser-sync'), 
    runSequence = require('run-sequence');
//var server = require('gulp-server-livereload');

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app', // Директория для сервера - app
            routes: {
                "/bower_components": "bower_components"
            }
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('add', function() { // Инициализация измененных файлов
    console.log('git adding...');
    return gulp.src('app/')
        .pipe(git.add());
});


gulp.task('sass', function(){
return gulp.src('app/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css/'))
});

gulp.task('watch', ['browser-sync'], function(){
    gulp.watch('app/sass/*.sass', ['sass']);

    gulp.watch('app/index.html', function() {
        runSequence('add');
    });
    gulp.watch('app/js/**/*.js', browserSync.reload);
    gulp.watch('app/index.html', browserSync.reload);
});

gulp.task('default', ['watch']);