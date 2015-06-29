var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var minifyHTML  = require('gulp-minify-html');
var uglify      = require('gulp-uglify');


gulp.task('serve', ['sass'], function() {

	browserSync.init({
		injectChanges: false,
		server: "./production"
	});

	gulp.watch("development/scss/*.scss", ['sass']);
	gulp.watch("development/js/*.js", ['compress']);
	gulp.watch("development/*.html", ['minify-html']);
});

gulp.task('sass', function() {
	return gulp.src("development/scss/*.scss")
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(gulp.dest("production/css"))
		.pipe(browserSync.stream());
});
 
gulp.task('minify-html', function() {
	var opts = {
		conditionals: true,
		spare:true
	};
 
	return gulp.src('./development/*.html')
		.pipe(minifyHTML(opts))
		.pipe(gulp.dest('./production/'))
		.pipe(browserSync.stream());
});

gulp.task('compress', function() {
	return gulp.src('development/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./production/js/'));
});

gulp.task('default', ['serve']);