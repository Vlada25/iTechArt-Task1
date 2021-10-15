// Less configuration
const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', (cb) => {
  gulp
    .src('src/css/*.less')
    .pipe(less())
    .pipe(
      gulp.dest((f) => f.base),
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('less', (cb) => {
    gulp.watch('src/css/*.less', gulp.series('less'));
    cb();
  }),
);
