// var gulp = require('gulp');
const { watch, series, parallel } = require('gulp');


/* function defaultTask(cb) {
    // place code for your default task here
    cb();
} */


function fireUp(cb) {
    browserSync.init({
        server: true
    })
    cb();
}

function reload(done) {
    browserSync.reload();
    done();
}

//function liveReload(cb) {
//    watch(['**/*.html', 'css/*.css', 'js/*.js'], function (cb) {
//        browserSync.reload;
//        cb();
//    });
//    cb();
//}
function html1(cb) {
    watch('**/*.html', reload);
    cb();
}

function css1(cb) {
    watch('css/*.css', reload);
    cb();
}

function javascript1(cb) {
    watch('js/*.js', reload);
    cb();
}

exports.build = series(fireUp, parallel(html1, css1, javascript1)
);
// exports.default = defaultTask;






var browserSync = require('browser-sync').create();

/* 
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'js_tools'
        },
    })
})

// gulp Watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
gulp.task('watch', gulp.series(gulp.parallel('browserSync'), function(done) {
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
    gulp.watch('pages/*.html', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
    done();
}));


 gulp.task('hello', function(done) {
     console.log('hello zell');
     done();
 }); */