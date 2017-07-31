var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('serve',function() {
    browserSync.init({
        proxy: "localhost:3000",
        port:"3333"
    });
    gulp.watch(['./**/**', '!./node_modules/**']).on('change',reload);
});
gulp.task('default', ['serve']);
