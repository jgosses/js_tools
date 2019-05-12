// var gulp = require('gulp');
const { watch, series, parallel } = require('gulp');

var browserSync = require('browser-sync').create();


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




