// var gulp = require('gulp');
const { watch, series, parallel } = require('gulp');

var browserSync = require('browser-sync').create();


function fireUp(cb) {
    browserSync.init({
//        server: true //this option in itself works too
        server: {
            baseDir : "./" //both of these options work
            //proxy: "yourlocal.dev" //both of these options work
        }
    })
    cb();
}

function reload(done) {
    browserSync.reload();
    done();
}

function html1(cb) {
    watch(['**/*.html', 'pages/**/*.html'], reload);
    cb();
}

function css1(cb) {
    watch('pages/**/*.css', reload);
    cb();
}

function javascript1(cb) {
    watch('**/*.js', reload);
    cb();
}

exports.build = series(fireUp, parallel(html1, css1, javascript1)
);




