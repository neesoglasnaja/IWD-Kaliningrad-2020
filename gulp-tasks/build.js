const gulp = require('gulp');
require('./build-stylus');
require('./build-jade');

/**
 * Builds the site
 *
 * @task {build}
 * @group {Build}
 * @order {0}
 */
gulp.task('build', gulp.parallel('build:stylus', 'build:jade'));
