
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var htmlmin = require('gulp-htmlmin');


//Sass Source
var scssFiles = './source/scss/*.scss';

//Css destino
var cssDest = './dist/css';

//HTML Source
var htmlFiles = './source/index.html';

//HTML destino
var htmlDest = './dist';

//Options for development
var sassDevOptions = {
	outputStyle: 'expanded'
}

//Options for production
var sassProdOptions = {
	outputStyle: 'compressed'
}


//comando
gulp.task('sassdev', function(){
	return gulp.src(scssFiles)
	.pipe(sass(sassDevOptions).on('error',sass.logError))
	.pipe(gulp.dest(cssDest));
});


gulp.task('sassprod', function(){
	return gulp.src(scssFiles)
	.pipe(sass(sassProdOptions).on('error',sass.logError))
	.pipe(rename('style.min.css'))
	.pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(){
	gulp.watch(scssFiles, ['sassdev', 'sassprod']);
});


//MINIFICAR HTML
//Options for production


gulp.task('htmlprod', function(){
	return gulp.src(htmlFiles)
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest(htmlDest));
});

gulp.task('watchh', function(){
	gulp.watch(htmlFiles, ['htmlprod']);
});

gulp.task('default', ['sassdev', 'sassprod', 'htmlprod', 'watch', 'watchh']);






