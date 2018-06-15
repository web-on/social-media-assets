var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var rimraf  = require('rimraf');

var PATHS = {
	styles: {
		src: 'src/scss/*.scss',
		dest: 'dist/css/'
	},
	dist: 'dist'
};

function clean_all(done) {
  rimraf(PATHS.dist, done);
}

function clean_css(done) {
  rimraf(PATHS.styles.dest, done);
}

function styles() {
  return gulp.src(PATHS.styles.src)
		.pipe(sass())
		.pipe(gulp.dest(PATHS.styles.dest));
}

exports.styles = styles;

var css = gulp.series(clean_css, styles);

gulp.task('css', css);


gulp.task('default', css);
