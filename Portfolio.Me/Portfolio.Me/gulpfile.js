var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cssmin = require('gulp-cssmin'),
    del = require('del'),
    htmlToJsCompiler = require('gulp-html-to-js'),
    minify = require('gulp-minify'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    imagemin = require('gulp-imagemin');

var errorHandler = function (error) {
    console.log(error);
    this.emit('end');
}

var resolveMinifiedPath = function (path) {
    var params = path.split("/");
    var file = params.splice(params.length - 1, 1)[0];
    var newPath = params.join("/") + "/";

    return {
        file: file,
        path: newPath
    };
}

// Clean the distributable css directory
gulp.task('minify:clean:css', function () {
    return del('css/');
});

// Compile out sass files and minify it
gulp.task('minify:css', ['minify:clean:css'], function () {
    var min = resolveMinifiedPath("./dist/css/app.min.css");
    return gulp.src('scss/*.scss')
        .pipe(plumber(errorHandler))
        .pipe(sass())
        //.pipe(gulp.dest('css/'))
        .pipe(cssmin())
        .pipe(concat(min.file))
        .pipe(gulp.dest(min.path));
});

gulp.task('uglify:minify:js',['minify:templates:js:concat'], function (cb) {
    pump([
          gulp.src([
              'minifiedTemplates/portfolio.templates.min.js',
              'dist/js/**/*.js']),
          uglify(),
          concat('app.min.js'),
          gulp.dest('dist/min')
    ],
      cb
    );
});

//Watch CSS task
gulp.task('default:css', function () {
    gulp.watch('scss/*.scss', ['minify:css']);
});

//Watch CSS task
gulp.task('default:js', function () {
    gulp.watch(
        ['dist/js/**/*.js', 'dist/js/**/*.html'], ['uglify:minify:js']);
});


gulp.task('minify:profile-skills', () =>
    gulp.src('profile-skills/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/profile-skills'))
);

gulp.task('minify:project-logos', () =>
    gulp.src('project-logos/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/project-logos'))
);

gulp.task('minify:profile-pics', () =>
    gulp.src('profile-pics/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images/profile-pics'))
);


gulp.task('minify:templates:js:concat', function () {
    return gulp.src([
        'dist/js/templates/**/*.html', 
        ])
      .pipe(htmlToJsCompiler({ concat: 'portfolio.templates.min.js', prefix: 'templates/portfolio', global: 'window.TemplatesPortfolio' }))
      .pipe(gulp.dest('minifiedTemplates/'));
});