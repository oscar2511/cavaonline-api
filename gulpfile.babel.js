/** @flow **/

// Gulp
import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import flow from 'gulp-flowtype';

// Node
import { join } from 'path';

const SRC_DIR = join(__dirname, '/src');
const DIST_DIR = join(__dirname, '/dist');

gulp.task('flow', ['clean'], (cb) => {
  return gulp
    .src(SRC_DIR + '/**/*.js')
    .pipe(flow({
      all: false,
      weak: false,
      killFlow: false,
      beep: true,
      abort: true
    }));
});

gulp.task('clean', () => {
  gulp
    .src(DIST_DIR)
    .pipe(clean());
});

gulp.task('babel',['flow'], (cb) => {
  gulp
    .src(SRC_DIR + '/**/*.js')
    .pipe(babel())
    .on('error', console.error)
    .pipe(gulp.dest(DIST_DIR))
    .on('end', cb);
});

gulp.task('dev',['babel'], () => {
  gulp.watch(SRC_DIR + '/**/*.js', ['babel'])
});
