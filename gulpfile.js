/**
 * Created by Tim on 1/14/2017.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var inject = require('gulp-inject');
var concat = require('gulp-concat-process');
var cache = require('gulp-cached');
var angularFilesort = require('gulp-angular-filesort');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var connect = require('gulp-connect');

gulp.task('copy-js', function() {
	return gulp.src([
		'dev/**/*.js'
	])
		.pipe(concat('main.js', function (content, file) {
			// process the content

			return content;
		}))
		.pipe(gulp.dest('app/'));
});

gulp.task('copy-node-modules-js', function () {
	return gulp.src([
		'node_modules/angular/angular.min.js',
		'node_modules/angular-ui-router/release/angular-ui-router.min.js'
	])
	.pipe(concat('all.js', function (content, file) {
		// process the content

		return content;
	}))
	.pipe(gulp.dest('app/libs/'));
});

gulp.task('copy-html', function () {
	return gulp.src(['dev/**/*.html'])
		.pipe(gulp.dest('app/'));
});

gulp.task('inject-js', ['copy-js', 'copy-node-modules-js'], function () {
	var target = gulp.src('app/index.html');
	var sources = gulp.src([
		'app/**/*.js'
	]).pipe(angularFilesort());
	return target.pipe(inject(sources, {relative: true}))
		.pipe(gulp.dest('app'));
});

gulp.task('connect', ['inject-js', 'copy-html'], function () {
	connect.server({
		root: 'app/',
		port: 8000,
		livereload: true,
		fallback: 'app/index.html'
	});
});

//gulp.task('sass', ['copy-css'], function () {
//	return gulp.src(['**/*.sass',
//		'!modules/**',
//		'!libs/**'])
//		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//		.pipe(sourcemaps.init())
//		.pipe(concat('pb-main.css'))
//		.pipe(sourcemaps.write())
//		.pipe(gulp.dest('../app/assets/css/'));
//});

//gulp.task('node-modules-css', function () {
//	return gulp.src([
//		'../node_modules/md-color-picker/dist/mdColorPicker.min.css'
//	])
//		.pipe(gulp.dest('../dev/assets/css/'));
//});
//
//gulp.task('copy-css', ['node-modules-css'], function () {
//	return gulp.src([
//		'assets/css/mdColorPicker.min.css'
//	])
//		.pipe(gulp.dest('../app/assets/css/'));
//});



//gulp.task('copy-js', ['node-modules-js'], function () {
//	return gulp.src([
//		'!gulpfile.js',
//		'!modules/**',
//		'lazyLoad.js',
//		'**/components/**/*.js',
//		'**/config/**/*.js',
//		'**/controllers/**/*.js',
//		'**/directives/**/*.js',
//		'**/factories/**/*.js',
//		'**/home/**/*.js',
//		'**/http/**/*.js',
//		'**/libs/ngstorage/ngStorage.min.js',
//		'**/libs/oclazyload/dist/ocLazyLoad.min.js',
//		'**/libs/tinycolor2/dist/tinycolor-min.js',
//		'**/libs/md-color-picker/dist/mdColorPicker.min.js',
//		'**/services/**/*.js',
//		'**/side-nav/**/*.js',
//		'**/sub-modules/**/*.js',
//		'**/assets/js/moment.js',
//		'**/assets/js/angular-ui-router.min.js',
//		'**/assets/js/jquery-2.1.4.min.js',
//		'**/assets/js/angular-chart.js-master/dist/angular-chart.min.js'])
//		.pipe(ngAnnotate())
//		.pipe(cache('copying'))
//		.pipe(gulp.dest('../app/'));
//});


//gulp.task('copy-images', function () {
//	return gulp.src(['**/assets/img/**/*'])
//		.pipe(cache('copying'))
//		.pipe(gulp.dest('../app/'));
//});

// gulp.task('watch-folder', function() {
//    gulp.src([source + '/**/*', '!/**/*.sass'], {base: source})
//        .pipe(watch(source, {base: source}))
//        .pipe(gulp.dest(destination));
// });

//gulp.watch(['**/*.sass'], ['sass']);
//gulp.watch(['**/*.*', '!assets/sass/*.sass', '!libs/**'], ['copy-js', 'copy-html']);

