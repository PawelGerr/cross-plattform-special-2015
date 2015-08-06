var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    bowerFiles = require('main-bower-files'),
    less = require('gulp-less'),
    minifyCss = require('gulp-minify-css'),
    templateCache = require('gulp-angular-templatecache'),
    typescript = require('gulp-typescript'),
    tsd = require('gulp-tsd'),
    cached = require('gulp-cached'),
    remember = require('gulp-remember'),
    ngAnnotate = require('gulp-ng-annotate'),
    watch = require('gulp-watch'),
    del = require('del'),
    runSequence = require('run-sequence'),
    plumber = require('gulp-plumber');

var destinationPath = 'build/';
var bowerSrcOpts = {base: process.cwd() + '/bower_components/'};
var globs = {
    less: './app/**/*.less',
    typescript: './app/**/*.ts',
    html: './app/**/*.html',
    indexhtml: './index.html',
    assets: './assets/**/*.*'
};

function addSteps(stream, additionalSteps) {
    return additionalSteps && additionalSteps(stream) || stream;
}

function createReadWriteTask(src, srcOptions, additionalSteps) {
    var stream = gulp.src(src, srcOptions)
        .pipe(plumber());

    return addSteps(stream, additionalSteps)
        .pipe(gulp.dest(destinationPath));
}

function createBundlingTask(src, srcOptions, bundleFileName, additionalSteps) {
    return createReadWriteTask(src, srcOptions, function (stream) {
        stream = stream
            .pipe(cached(bundleFileName))
            .pipe(sourcemaps.init());

        return addSteps(stream, additionalSteps)
            .pipe(remember(bundleFileName))
            .pipe(concat(bundleFileName))
            .pipe(sourcemaps.write());
    });
}

function createWatchTask(globs, taskName) {
    watch(globs, function () {
        gulp.start(taskName);
    });
}

gulp.task('libs-js', function () {
    return createBundlingTask(bowerFiles('**/*.js'), bowerSrcOpts, 'libs.js');
});

gulp.task('libs-css', function () {
    return createBundlingTask(bowerFiles('**/*.css'), bowerSrcOpts, 'libs.css', function (stream) {
        return stream
            .pipe(minifyCss({
                keepBreaks: true,
                rebase: true,
                relativeTo: './bower_components',
                target: './bower_components'
            }))
    });
});

gulp.task('libs-assets', function () {
    var globs = ['**/*.*', '!**/*.css', '!**/*.js', '!**/*.less'];
    return createReadWriteTask(bowerFiles(globs), bowerSrcOpts);
});

gulp.task('scripts', function () {
    return createBundlingTask(['./typings/tsd.d.ts', globs.typescript], undefined, 'app.js', function (stream) {
        return stream
            .pipe(typescript({target: 'ES5'}))
            .pipe(ngAnnotate());
    });
});

gulp.task('styles', function () {
    return createBundlingTask(globs.less, undefined, 'app.css', function (stream) {
        return stream.pipe(less());
    });
});

gulp.task('templates', function () {
    return createReadWriteTask(globs.html, undefined, function (stream) {
        return stream.pipe(templateCache({module: 'app'}));
    });
});

gulp.task('assets', function () {
    return createReadWriteTask(globs.assets, {base: process.cwd()});
});

gulp.task('index-html', function () {
    return createReadWriteTask(globs.indexhtml);
});

gulp.task('clear', function (cb) {
    del(destinationPath, cb);
});

gulp.task('build', function (cb) {
    return runSequence('clear', ['libs-js', 'libs-css', 'libs-assets', 'scripts', 'styles', 'templates', 'assets', 'index-html'], cb);
});

gulp.task('watch', function () {
    createWatchTask(globs.less, 'styles');
    createWatchTask(globs.html, 'templates');
    createWatchTask(globs.indexhtml, 'index-html');
    createWatchTask(globs.typescript, 'scripts');
    createWatchTask(globs.assets, 'assets');
});

