var gulp = require('gulp'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;


// ////////////////////////////////////////////////
// Scripts Tasks
// ///////////////////////////////////////////////

/*gulp.task('scripts', function() {
  return gulp.src(config.jsConcatFiles)
	.pipe(sourcemaps.init())
		.pipe(concat('temp.js'))
		.pipe(uglify())
		.on('error', errorlog)
		.pipe(rename('app.min.js'))
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('./app/js/'))

    .pipe(reload({stream:true}));
});*/


// ////////////////////////////////////////////////
// Styles Tasks
// ///////////////////////////////////////////////

gulp.task('styles', function() {
	gulp.src('main.scss')
		//.pipe(sourcemaps.init())
			.pipe(sass({outputStyle: 'compressed'}))
			.on('error', sass.logError)
			.pipe(autoprefixer({
        browsers: ['last 3 versions'],
	      cascade: false
	    }))
		//.pipe(sourcemaps.write('../maps'))
		.pipe(gulp.dest('./css'))
		.pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// HTML Tasks
// // /////////////////////////////////////////////

gulp.task('html', function(){
    gulp.src('index.html')
    .pipe(reload({stream:true}));
});


// ////////////////////////////////////////////////
// Browser-Sync Tasks
// // /////////////////////////////////////////////

gulp.task('browser-sync', function() {
    browserSync({
        open: false,
        server: {
            baseDir: "./"
        }
    });
});

// ////////////////////////////////////////////////
// Watch Tasks
// // /////////////////////////////////////////////

gulp.task ('watch', function(){
	gulp.watch('main.scss', ['styles']);
	//gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('index.html', ['html']);
});


gulp.task('default', ['styles', 'html', 'browser-sync', 'watch']);
