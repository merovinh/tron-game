const gulp = require('gulp');
const babel = require('gulp-babel');
const stylus = require("gulp-stylus");
const concat = require("gulp-concat");
const del = require("del");

gulp.task('clean', function() {
    return del('dist');
});

gulp.task('js', () =>
  gulp.src('src/app.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('styles', ()=>
  gulp.src('src/styles/**/*.styl')
    .pipe(stylus())
    .pipe(concat('all.css'))
    .pipe(gulp.dest('dist/styles'))
);

gulp.task('html', ()=>
  gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist'))
);

gulp.task('images', ()=>
  gulp.src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'))
);

gulp.task('watch', function() {
  gulp.watch('src/styles/**/*.styl', ['styles']);
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/images/**/*.*', ['images']);
  gulp.watch('src/app.js', ['js']);
});

gulp.task('build', ['clean','js','styles','html','images','watch']);