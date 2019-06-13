const gulp = require('gulp');
const config = require('./config');
const browserSync = require('browser-sync');
require('./build');

/**
 * Serves the site
 *
 * @task {serve}
 * @group {Serve}
 */
gulp.task('serve', gulp.series('build', () => {
    const dist = config.base.dist;
    browserSync.init({
        server: {
            baseDir: dist,
        },
        ghostMode: {
            scroll: true,
        },
        notify: false,
        open: true,
        port: 3001,
        files: [
            `${dist}/pictures/**/*`,
            `${dist}/shower/**/*`,
            `${dist}/highlight/**/*`,
            `${dist}/**/*.css`,
            `${dist}/**/*.html`,
        ],
    });
    gulp.watch(config.base.stylus, gulp.series('build:stylus'));
    gulp.watch(config.base.jade, gulp.series('build:jade'));
}));
