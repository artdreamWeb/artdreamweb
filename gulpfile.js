var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
    watch = require('gulp-watch');


// gulp.task('minifycss', function() {
//     return gulp.src('src/*.css')      //压缩的文件
//         .pipe(gulp.dest('minified/css'))   //输出文件夹
//         .pipe(minifycss());   //执行压缩
// });  
// 

//压缩js
gulp.task('minifyjs', function() {
    return gulp.src('resources/js/**/*.js')
        .pipe(concat('main.js'))    //合并所有js到mian.js
        .pipe(gulp.dest('public/js'))    //输出mian.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('public/js'));  //输出
});  

//执行压缩前，先删除文件夹里的内容
gulp.task('clean', function() {
    del('public/js/*.js');
});

//默认命令，在cmd中输入gulp后，执行的就是这个命令
gulp.task('default', ['clean'], function() {
    gulp.start('minifyjs');
});
