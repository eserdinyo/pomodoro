var gulp = require("gulp");
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var prefix = require("gulp-autoprefixer");
var plumber = require("gulp-plumber");

//Files Paths
var paths = {
  SCSS_SRC: "./sass/**/*.scss",
  SCSS_DEST: "./css/"
};

gulp.task("browser-sync", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("./*.html").on("change", reload);
  gulp.watch(paths.SCSS_SRC, ["sass"]);
});

gulp.task("sass", function() {
  return gulp
    .src(paths.SCSS_SRC)
    .pipe(plumber([{ errorHandler: false }]))
    .pipe(sass().on("error", sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest(paths.SCSS_DEST))
    .pipe(browserSync.stream());
});

gulp.task("default", ["browser-sync", "sass"]);
