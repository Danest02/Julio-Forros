import gulp, {
    watch
} from 'gulp';

// import htmlmin from 'gulp-htmlmin';

import babel from 'gulp-babel';
import terser from 'gulp-terser';
import concat from 'gulp-concat';

import pug from 'gulp-pug';
import sass from 'gulp-sass';

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


const production = true;
gulp.task('pug', () => {
    return gulp
        .src('./src/pug/pages/*.pug')
        .pipe(
            pug({
                pretty: production ? false : true
            })
        )
        // .pipe(rename({
        //     extname: ".php"
        //   }))
        .pipe(gulp.dest('./public'));
});
// gulp.task('rename', () => {
//     return gulp
//         .src('./src/*.html')
//         .pipe(rename({
//             extname: ".php"
//           }))
//         .pipe(gulp.dest('./public'));
// });

gulp.task('sass', () => {
    return gulp
        .src('./src/scss/styles.scss')
        .pipe(
            sass({
                outputStyle: 'compressed'
            })
        )
        .pipe(gulp.dest('./public/css'))
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
    // gulp.watch('./src/*.html', gulp.series('html-min'))
    gulp.watch('./src/pug/**/*.pug', gulp.series('pug'));
    // gulp.watch('./src/pug/**/*.pug', gulp.series('rename'));
    gulp.watch('./src/scss/**/*.scss', gulp.series('sass'))
});

