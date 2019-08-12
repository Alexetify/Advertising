var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "www/"
    });

    gulp.watch("www/sass/*.sass", ['sass']);
    gulp.watch("www/*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("www/sass/*.sass")
        .pipe(sass())
        .pipe(gulp.dest("www/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);