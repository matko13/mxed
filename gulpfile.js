const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});

gulp.task('sass', function(){
  return gulp.src('app/scss/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/index.html', browserSync.reload);
  gulp.watch('app/js/main.js', browserSync.reload);
});

