/* @flow */

const del = require("del");
const gulp = require("gulp");
const babel = require("gulp-babel");
const mocha = require("gulp-mocha");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");

const rollup = require("./build/rollup");

gulp.task("clean", () =>
    del([
        "cjs/",
        "esm/",
        "dist/",
    ]),
);

gulp.task("build:esm", () =>
    gulp
        .src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            plugins: [
                "@babel/plugin-transform-runtime",
                [
                    "babel-plugin-flow-runtime",
                    {
                        assert: true,
                    },
                ],
                "babel-plugin-lodash",
            ],
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: false,
                    },
                ],
                "@babel/preset-flow",
                [
                    "@babel/preset-stage-0",
                    {
                        loose: true,
                    },
                ],
            ],
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("esm/")),
);

gulp.task("build:cjs", () =>
    gulp
        .src("esm/**/*.js")
        .pipe(sourcemaps.init({
            loadMaps: true,
        }))
        .pipe(babel({
            plugins: [
                "@babel/plugin-transform-modules-commonjs",
            ],
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("cjs/")),
);

gulp.task("test", () =>
    gulp
        .src("cjs/**/*.test.js", {
            read: false,
        })
        .pipe(mocha())
        .on("error", () =>
            process.exit(1),
        ),
);

gulp.task("bundle:development", () =>
    rollup("./esm/index.js", "./dist/core.js", "development", "core"),
);

gulp.task("bundle:production", () =>
    rollup("./esm/index.js", "./dist/core.min.js", "production", "core"),
);

gulp.task("default", gulp.series(
    "clean",
    "build:esm",
    "build:cjs",
    "test",
    "bundle:development",
    "bundle:production",
));
