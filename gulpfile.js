var gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  concat = require('gulp-concat'),
  uncss = require('gulp-uncss'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  include = require('gulp-include'),
  notify = require('gulp-notify'),
  del = require('del'),
  gutil = require('gulp-util'),
  imagemin = require('gulp-imagemin'),
  newer = require('gulp-newer');

// Asset paths
var paths = {
  sass: ['src/scss/**/*.scss'],
  css: ['dist/css/**/*.css'],
  assets: ['src/assets/**/*'],
  js: ['src/js/**/*.js'],
  dist: ['dist/'],
  html: ['src/*.html']
};


// Task: Static server with Browser Sync
gulp.task('browser-sync', ['sass'], function(gulpCallback) {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    },
    // Open the site in Chrome
    browser: "google chrome",
    ghostMode: false
  }, function callback() {
    gulp.watch('dist/*.html').on('change', browserSync.reload);
    gulp.watch('dist/js/**/*').on('change', browserSync.reload);
    gulp.watch('dist/img/**/*').on('change', browserSync.reload);
    gulp.watch(paths.sass, ['sass']);
    gulpCallback();
  });
});

// TASK: Html loading
gulp.task('html', function() {
  return gulp.src(paths.html)
    .pipe(gulp.dest('dist/'))
    .pipe(notify({ message: 'HTML Reloaded' }));
});


// TASK: Compile Sass

gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream({ match: '**/*.css' }))
    .pipe(notify({ message: 'Sass task completed' }));
});

// TASK: Concatenate & Minify JS Files
gulp.task('scripts', function() {
  return gulp.src(paths.js)
    .pipe(include())
    .on('error', console.log)
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Scripts task completed' }));
});

// TASK: Image Optimization
gulp.task('images', function() {
  return gulp.src(paths.assets)
    .pipe(newer('dist/img'))
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'Images task completed' }));
});

// TASK: Watch for changes
gulp.task('watch', function() {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['scripts']);
  gulp.watch('src/assets', ['images']);
});

gulp.task('clean', function(cb) {
  del(['dist/*'], cb);
});

gulp.task('build', ['clean'], function() {
  return gulp.src('dist/css/*.css')
    .pipe(uncss({
      html: ['dist/*.html']
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'build finished' }));
});

gulp.task('default', ['browser-sync', 'html', 'sass', 'scripts', 'images', 'watch']);