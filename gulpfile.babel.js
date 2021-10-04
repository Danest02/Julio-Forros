import gulp, {
    watch
} from 'gulp';

// import htmlmin from 'gulp-htmlmin';

import babel from 'gulp-babel';
import terser from 'gulp-terser';
import concat from 'gulp-concat';

import pug from 'gulp-pug';
var sass = require('gulp-sass')(require('sass'));

var postcss = require ('gulp-postcss');
var autoprefixer = require ('autoprefixer');
var cssnano = require ('cssnano');

import clean from 'gulp-purgecss';

import rename from 'gulp-rename'




// gulp.task('html-min', () => {
//     return gulp
//         .src('./public/*html')
//         .pipe(
//             htmlmin({
//                 collapseWhitespace: true,
//                 removeComments: true
//             })
//         )
//         .pipe(gulp.dest('./public'));
// });
gulp.task('babel', () => {
    return gulp
        .src('./src/js/*.js')
        .pipe(concat('scripts-min.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(terser())
        .pipe(gulp.dest('./public/js'));
});


const index = false;
gulp.task('pugIndex', () => {
    return gulp
        .src('./src/pug/index.pug')
        .pipe(
            pug({
                pretty: index ? false : true
            })
        )
        // .pipe(rename({
        //     extname: ".php"
        //   }))
        .pipe(gulp.dest('./public'));
});
const pages = false;
gulp.task('pugPages', () => {
    return gulp
        .src('./src/pug/pages/*.pug')
        .pipe(
            pug({
                pretty: pages ? false : true
            })
        )
        // .pipe(rename({
        //     extname: ".php"
        //   }))
        .pipe(gulp.dest('./public/pages'));
});
// gulp.task('rename', () => {
//     return gulp
//         .src('./src/*.html')
//         .pipe(rename({
//             extname: ".php"
//           }))
//         .pipe(gulp.dest('./public'));
// });

// gulp.task('sass', () => {
//     return gulp
//         .src('./src/scss/styles.scss')
//         .pipe(
//             sass({
//                 outputStyle: 'compressed'
//             })
//         )
//         .pipe(gulp.dest('./public/css'))
// });

gulp.task ('css', function () {
    var procesadores = [
		autoprefixer,
		cssnano
	];
	return gulp.src ('./src/scss/styles.scss')
		.pipe (sass (). on ('error', sass.logError))
		.pipe (postcss (procesadores))
        // .pipe(
        //     clean({
        //       content: ['./public/*.html']
        //     })
        //   )    
		.pipe (gulp.dest ('./public/css'));
});


gulp.task('clean', () => {
    return gulp
      .src('./public/css/styles.css')
      .pipe(
        clean({
          content: ['./public/*.html']
        })
      )
      .pipe(gulp.dest('./public/css'));
});

gulp.task('default', () => {
    gulp.watch('./src/js/*.js', gulp.series('babel'))
    gulp.watch('./src/pug/**/*.pug', gulp.series('pugIndex'));
    gulp.watch('./src/pug/**/*.pug', gulp.series('pugPages'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('css'))
    // gulp.watch('./src/scss/**/*.scss', gulp.series('clean'))
    // gulp.watch('./src/*.html', gulp.series('html-min'))
    // gulp.watch('./src/pug/**/*.pug', gulp.series('rename'));
    // gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
});

