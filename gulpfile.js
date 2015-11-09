/**
 * Created by Ramesh Rasaiyan on 9/16/15.
 */

var gulp = require('gulp'),
    compass = require('gulp-compass'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    webserver = require('gulp-webserver');

/*****************************************
 * Gulp task for compiling scss files    *
 ****************************************/
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(plumber())
        .pipe(compass ({
            config_file: 'config.rb',
            css: 'css',
            sass: 'sass'
        }))
        .pipe(gulp.dest('css'));
});

/*****************************************
 * Gulp task for compiling js files      *
 ****************************************/
gulp.task('scripts', function() {
   gulp.src('js/*.js')
       .pipe(plumber())
       .pipe(uglify())
       .pipe(rename({
           extname: '.min.js'
       }))
       .pipe(gulp.dest('minjs'));
});

/*****************************************
 * Gulp task for Watching modified files *
 ****************************************/
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['styles']);
    gulp.watch('js/*.js', ['scripts']);
});

/****************************************************
 * Gulp task for simple HTTP server                 *
 * Add the folder name in gulp.src('folderName')    *
 * to the server to run                             *
 ***************************************************/

gulp.task('webserver', function() {
    gulp.src('')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: true
        }));
});


/*****************************************
 * Gulp Default tasks,                   *
 * run `gulp` to excute all the tasks    *
 * and watch                             *
 ****************************************/
gulp.task('default', ['styles', 'scripts', 'webserver', 'watch']);
