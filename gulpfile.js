/**
 * Gulp Task js for internal Javascript and CSS (Less) files
 * Include dependencies
 */
'use strict';
var gulp = require('gulp-param')(require('gulp'), process.argv),
    concat = require('gulp-concat'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    cleanCSS = require('gulp-clean-css'),
    runSequence = require('run-sequence'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    htmlMin = require('gulp-htmlmin'),
    imageMin = require('gulp-imagemin'),
    path = require('path'),
    filePath = {
        appCss: [
            'bower_components/bootstrap/dist/css/bootstrap.css',
            'assets/css/*.css'
        ],
        appJs: [
            'bower_components/angular/angular.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-lazy-img/release/angular-lazy-img.js',
            'bower_components/angular-bootstrap/ui-bootstrap.js',
            'bower_components/angular-local-storage/dist/angular-local-storage.js',
            'app/**/**/*.js',
            'app/modules/**/**/*.js',
            'app/app.js'
        ],
        appImg: 'assets/images/*',
        indexHtml: './index.html',
        dest: './build/resource',
    },
    environmentFileNames = ['local', 'development', 'staging', 'production'];

/* Tasks */
/* Combine all the css files in one file */
gulp.task('appCss', ['clean:appCss'], function() {
    return gulp.src(filePath.appCss)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(filePath.dest + '/css'));
});

/* Combine all the css files in one file and minify it*/
gulp.task('appCssMin', ['clean:appCss'], function() {
    return gulp.src(filePath.appCss)
        .pipe(concat('app.css'))
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(filePath.dest + '/css'));
});

/* Combine all the js files in one file */
gulp.task('appJs', ['clean:appJs'], function() {

    return gulp.src(filePath.appJs)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(filePath.dest + '/js'));
});

/* Combine all the js files in one file and minify it*/
gulp.task('appJsMin', ['clean:appJs'], function() {
    return gulp.src(filePath.appJs)
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(filePath.dest + '/js'));
});

/*Get inde index html file and put it in build folder*/
gulp.task('appIndexHtml', ['clean:indexHtml'], function() {

    return gulp.src(filePath.indexHtml)
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./build'));
});

/*Get inde index html file, minify it and put it in build folder*/
gulp.task('appIndexHtmlMin', ['clean:indexHtml'], function() {
    return gulp.src(filePath.indexHtml)
        .pipe(htmlMin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./build'))
});

/*Get all images from assets folder and move it in build folder*/
gulp.task('appImg', function() {
    return gulp.src(filePath.appImg)
        .pipe(gulp.dest(filePath.dest + '/images'));
});

/*Comapre env parameter and pushed environment file as per given name in env*/
gulp.task('addEnv', function(env, callback) {

    /*If user has not provided any environment file name*/
    if (env == undefined || env == true) {
        env = 'local';
    } else if (environmentFileNames.indexOf(env) == -1) {
        console.log('Please provide valid environment file name to be include i.e');
        console.log('--env local');
        console.log('--env development');
        console.log('--env staging');
        console.log('--env production');
        return;
    }

    filePath.appJs.push('config/' + env + '.js');
    callback();
});

/*Remove index.html file*/
gulp.task('clean:indexHtml', function() {
    return del('./build/*.html');
});

/*Remove all js files*/
gulp.task('clean:appJs', function() {
    return del(filePath.dest + '/js/*.js');
});

/*Remove all css files*/
gulp.task('clean:appCss', function(cb) {
    return del(filePath.dest + '/css/*.css');
});

/*Remove all css files*/
gulp.task('clean:appImg', function(cb) {
    return del(filePath.dest + '/img/*');
});

/*Run server and watch for changes*/
gulp.task('nodemon', function() {
    nodemon({
        script: 'server.js',
    });
});

/*Watch for changes in file, compile it for changes has done*/
gulp.task('watch', function() {

    livereload.listen()
    gulp.watch(filePath.appCss, ['appCss']).on('change', livereload.changed);
    gulp.watch(filePath.appJs, ['appJs']).on('change', livereload.changed);
    gulp.watch(filePath.indexHtml, ['appIndexHtml']).on('change', livereload.changed);
    gulp.watch(filePath.appImg, ['appImg']).on('change', livereload.changed);

});

/*Task for removing old html/js/css files*/
gulp.task('clean', ['clean:indexHtml', 'clean:appJs', 'clean:appCss', 'clean:appImg']);

/*Default task which accepts two parameter from command env (name of environment file) and minify flag for minification*/
gulp.task('default', ['addEnv'], function(minify, callback) {

    if (minify) {
        //Minify all the files and run server
        runSequence('appJsMin', 'appCssMin', 'appImg','appIndexHtmlMin', ['watch', 'nodemon'], callback);
    } else {
        //Run server without minifing the file
        runSequence('appJs', 'appCss', 'appImg','appIndexHtml', ['watch', 'nodemon'], callback);
    }
});
