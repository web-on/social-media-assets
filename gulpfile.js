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

function clean(done) {
  rimraf(PATHS.dist, done);
}

function styles() {
	return gulp.src(PATHS.styles.src)
		.pipe(sass())
		.pipe(gulp.dest(PATHS.styles.dest));
}

exports.styles = styles;

var build = gulp.series(clean, styles);


gulp.task('build', build);

gulp.task('default', build);
