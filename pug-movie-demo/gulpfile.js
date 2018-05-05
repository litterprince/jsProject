var gulp = require('gulp')
var browserSync = require('browser-sync')
var reload = browserSync.reload
var nodemon = require('gulp-nodemon')

gulp.task("default", function(){

})

gulp.task('server', ['node', 'watch'], function() {

})

gulp.task('node', function() {
  nodemon({
    script: 'src/app.js',
    ext: 'js html',
    ignore: ["gulpfile.js", "node_modules/", "public/**/*.*"],
    env: {
      'NODE_ENV': 'development'
    }
  })
})

gulp.task('watch', function(){
  var files = [
    'src/views/**/*.html',
    'src/views/**/*.pug',
    'public/**/*.*'
  ];
  browserSync.init(files, {
    proxy: 'http://localhost:3000',
    browser: 'chrome',
    notify: false,
    port: 3001
  });

  gulp.watch(files).on("change", reload);
})