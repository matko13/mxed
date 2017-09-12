'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('workflow', function () {
	gulp.src('app/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('app/css'))
});

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('app/scss/**/*.scss', ['workflow']);
  gulp.watch('index.html', browserSync.reload);
  gulp.watch('app/js/main.js', browserSync.reload);
});

