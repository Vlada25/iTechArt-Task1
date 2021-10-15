// Less configuration
const gulp = require('gulp');
const less = require('gulp-less');

gulp.task('less', (cb) => {
  gulp
    .src('src/*.less')
    .pipe(less())
    .pipe(
      gulp.dest((f) => f.base),
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('less', (cb) => {
    gulp.watch('src/*.less', gulp.series('less'));
    cb();
  }),
);
