//initialize modules
const {
    src,
    dest,
    watch,
    series,
    parallel
} = require('gulp');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const replace = require('gulp-replace');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

//file path variables
const files = {
    scssPath: 'app/sass/**/*.scss',
    jsPath: 'app/js/**/*.js'
}
//sass tasks
function scssTask() {
    return src(files.scssPath)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write())
        .pipe(dest('dist'));
}

//js tasks
function jsTask() {
    return src(files.jsPath)
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(dest('dist'));
}

//cachebusting tasks
const cbString = new Date().getTime();

function cacheBustTask() {
    return src(['html/registration-page.html', 'html/demo-form.html'])
        .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
        .pipe(dest('.'));

}

//watch tasks
function watchTask() {
    watch([files.scssPath, files.jsPath],
        parallel(scssTask, jsTask));
}

//default tasks
exports.default = series(
    parallel(scssTask, jsTask),
    cacheBustTask,
    watchTask
);