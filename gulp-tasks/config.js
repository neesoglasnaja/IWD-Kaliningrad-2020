const util = require('gulp-util');

const base = {
    stylus: "./src/styles/*.styl",
    jade:'./src/',
    html: "./*.html",
    dist: "./"
};

const autoprefixer = [
    '> 1%',
    'last 2 versions',
    'Firefox ESR',
    'iOS >= 8',
];

const isDev = !util.env.production;

module.exports = {
    autoprefixer,
    base,
    isDev,
};
