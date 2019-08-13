var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src('www/sass/*.sass')
      .pipe(sass())
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream()); //{match: '**/*.css'}
});


function reload(done) {
  browserSync.reload();
  done();
}

// Server + watching scss/js files
gulp.task('default', function () {
  browserSync.init({
    server: {
                baseDir: "./"
            }
    
  });
  gulp.watch(['www/sass/*.sass'], gulp.parallel(reload));
  gulp.watch(['www/*.html'], gulp.parallel(reload));
  gulp.watch(['js/*.js'], gulp.parallel(reload));
 
  
});

