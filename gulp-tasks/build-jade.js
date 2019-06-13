const gulp = require('gulp');
const config = require('./config');
const jade = require('gulp-jade');
const utils = require('./utils');

/**
 * Builds Jade
 *
 * @task {build:jade}
 * @group {Build}
 */
gulp.task('build:jade', () => {
    const src = config.base.jade;
    const dist = config.base.dist;
    return gulp
        .src(`${src}/index.jade`)
        .pipe(jade({
            pretty: true
        }).on('error', utils.notifyError('Jade Error')))
        .pipe(gulp.dest(dist));
});
