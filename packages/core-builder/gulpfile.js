/* @flow */

const del = require("del");
const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("clean", () =>
    del([
        "build/",
    ]),
);

gulp.task("build", () =>
    gulp.src("src/**/*.js")
        .pipe(babel({
            plugins: [
                "@babel/plugin-transform-runtime",
                "babel-plugin-add-module-exports",
            ],
            presets: [
                "@babel/preset-env",
            ],
        }))
        .pipe(gulp.dest("build/")),
);

gulp.task("default", gulp.series("clean", "build"));
