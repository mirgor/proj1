var gulp = require('gulp'),
    sass = require('gulp-sass'),
    git = require('gulp-git'),
    browserSync  = require('browser-sync');
//var server = require('gulp-server-livereload');

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('add', function() { // Инициализация измененных файлов
    console.log('git adding...');
    return gulp.src('app/')
        .pipe(git.add());
});

gulp.task('gitsend', function() {
    runSequence('add');
});



gulp.task('sass', function(){
return gulp.src('app/sass/*.sass')
    .pipe(sass())
    .pipe(gulp.dest('app/css/'))
});

gulp.task('watch', function(){
    gulp.watch('app/sass/*.sass', ['sass']);
});

gulp.task('default', ['watch', 'browser-sync']);