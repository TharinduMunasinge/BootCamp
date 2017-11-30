import minimist from 'minimist';
import watch from 'gulp-watch';
import gulp from 'gulp';

const mocha = require('gulp-mocha');

// Get command line args
const knownOptions = {
  string: 'file',
  default: { file: './src/**/test/*.@(js)' },
};
const options = minimist(process.argv.slice(2), knownOptions);

gulp.task('test',
  () => gulp.src(options.file)
    .pipe(mocha({
      reporter: 'progress',
      timeout: 100000,
      compilers: 'js:babel-core/register',
    })));

// Running mocha test when files change
gulp.task('test:custom', () => gulp.watch('./src/**/*.@(js)', ['test']));

