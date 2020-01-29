const gulp = require('gulp');
const minifycss = require('gulp-minify-css');
const htmlmin = require('gulp-htmlmin');
const htmlclean = require('gulp-htmlclean');

// Compress CSS
gulp.task('minify-css', async () => {
  return gulp.src('./public/**/*.css')
    .pipe(minifycss())
    .pipe(gulp.dest('./public'))
});

// Compress HTML
gulp.task('minify-html', async () => {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
      removeComments: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});

gulp.task('default', gulp.series(gulp.parallel('minify-html', 'minify-css')), function () {
  console.log("---------- gulp Finished ----------");
});
