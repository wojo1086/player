var gulp = require('gulp');
var inject = require('gulp-inject');
var connect = require('gulp-connect');
var angularFilesort = require('gulp-angular-filesort');
var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['connect', 'watch', 'start', 'copy-node-modules'], function () {

});

gulp.task('start', ['inject-js']);

//gulp.task('inject-js', ['copy-js',
//	'copy-node-modules-styles',
//	'inject-css'], function () {
//	var target = gulp.src('app/index.html');
//	var sources = gulp.src([
//		'app/**.js',
//		'app/*/**.js'
//	]).pipe(angularFilesort());
//	return target.pipe(inject(sources, {relative: true}))
//	.pipe(gulp.dest('app'))
//	.pipe(connect.reload());
//});

gulp.task('copy-html', function () {
	return gulp.src('dev/**/*.html')
	.pipe(gulp.dest('app/'));
});

gulp.task('copy-js', ['copy-html'], function() {
	return gulp.src('dev/**/*.js')
	.pipe(ngAnnotate())
	.pipe(sourcemaps.init())
	.pipe(concat('player.js'))
	.pipe(gulp.dest('app/'))
	.pipe(uglify())
	.pipe(rename('player.min.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/'));
});

gulp.task('copy-node-modules', function () {
	return gulp.src([
		'node_modules/angular/angular.min.js',
		'node_modules/angular-ui-router/release/angular-ui-router.min.js'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('libs.js'))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/'));
});

gulp.task('inject-js', ['copy-js'], function() {
	var target = gulp.src('app/index.html');
	var sources = gulp.src([
		'app/player.min.js',
		'app/libs.js'
	]).pipe(angularFilesort());
	return target.pipe(inject(sources, {relative: true}))
	.pipe(gulp.dest('app/'))
	.pipe(connect.reload());
});

//gulp.task('copy-node-modules-styles', ['copy-node-modules'], function () {
//	return gulp.src([
//		//'node_modules/angular-material/angular-material.min.css'
//	])
//	.pipe(gulp.dest('app/libs'));
//});


//gulp.task('copy-js', ['copy-html'], function () {
//	return gulp.src([
//		'dev/**/*.js'
//	])
//	.pipe(ngAnnotate())
//	.pipe(concat('cards.js'))
//	.pipe(gulp.dest('app/'));
//});

//gulp.task('inject-css', ['sass', 'copy-html'], function () {
//	var target = gulp.src('app/index.html');
//	var sources = gulp.src([
//		//'app/libs/angular-material.min.css',
//		'app/cards.css'
//	]);
//	return target.pipe(inject(sources, {relative: true}))
//	.pipe(gulp.dest('app'));
//});

//gulp.task('sass', function () {
//	return gulp.src([
//		'dev/**/*.sass'
//	])
//	.pipe(sass().on('error', sass.logError))
//	.pipe(concat('cards.css'))
//	.pipe(gulp.dest('app/'));
//});

gulp.task('connect', ['copy-html'], function () {
	connect.server({
		root: 'app/',
		port: 8000,
		livereload: true,
		fallback: 'app/index.html'
	});
});

gulp.task('watch', function () {
	gulp.watch(['dev/**/*.*'], ['start']);
});
