var gulp = require('gulp');

var uglify = require('gulp-uglify');
var clean = require('gulp-clean');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var stylus = require('gulp-stylus');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

// Delete the dist directory
gulp.task('clean', function() {
	return gulp.src('./dist')
		.pipe(clean());
});

// Compile Stylus to Css Dist
gulp.task('stylus', ['clean'], function () {
	gulp.src('assets/css/main.styl')
		.pipe(stylus({compress: true}))
		.pipe(gulp.dest('dist/assets/css'));
});

// Compile Stylus to Css Src
gulp.task('stylusSrc', function () {
	gulp.src('assets/css/main.styl')
		.pipe(stylus())
		.pipe(gulp.dest('assets/css'))
        .pipe(livereload());
});

// Concat and Uglify Script in index.html
gulp.task('scripts', ['clean'], function () {
    var assets = useref.assets();
    return gulp.src('index.html')
        .pipe(assets)
        .pipe(gulpif('*.js', uglify({mangle: false})))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

// Copy other files
gulp.task('copy', ['clean'], function() {
	
	// Html components
	gulp.src('components/**/*.html')
		.pipe(gulp.dest('dist/components'));

	// Html sections
	gulp.src('sections/**/*.html')
		.pipe(gulp.dest('dist/sections'));

	// Copy fonts
	gulp.src('assets/fonts/**')
		.pipe(gulp.dest('dist/assets/fonts'));

	// Copy images
	gulp.src('assets/img/**')
		.pipe(gulp.dest('dist/assets/img'));
});

// Task to build app
gulp.task('build', ['clean', 'scripts', 'stylus', 'copy']);

// Task to watch changes in dev mode
gulp.task('watch', function(){
    livereload.listen();
    gulp.start('stylusSrc');
    watch(['assets/css/**/*.styl', 'assets/css/*.styl'], function(){
        gulp.start('stylusSrc');
    });
});

