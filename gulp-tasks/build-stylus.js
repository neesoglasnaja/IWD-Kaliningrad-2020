const gulp = require('gulp');
const gulpif = require('gulp-if');
const config = require('./config');
const sourcemaps = require('gulp-sourcemaps');
const stylus = require('gulp-stylus');
const utils = require('./utils');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');

const src = config.base.stylus;
const dist = config.base.dist;

/**
 * Builds styles files
 *
 * @task {build:stylus}
 * @group {Build}
 */
gulp.task('build:stylus', () => {
    return gulp
        .src(src)
        .pipe(gulpif(config.isDev, sourcemaps.init()))
        .pipe(
            stylus().on('error', utils.notifyError('Stylus Error'))
        )
        .pipe(autoprefixer({
            browsers: config.autoprefixer,
            cascade: false,
        }))
        .pipe(csso().on('error', utils.notifyError('Csso Error')))
        .pipe(gulpif(config.isDev, sourcemaps.write('.')))
        .pipe(gulp.dest(dist));
});
