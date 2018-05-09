/* @flow */

import del from "del";
import gulp from "gulp";
import babel from "gulp-babel";
import mocha from "gulp-mocha";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";

import webpack from "./build/webpack";

gulp.task("clean", () =>
    del([
        "cjs/",
        "dist/",
        "esm/",
    ]),
);

gulp.task("build:esm", () =>
    gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(babel({
            plugins: [
                [
                    "babel-plugin-flow-runtime",
                    {
                        assert: true
                    }
                ],
                "babel-plugin-lodash",
            ],
            presets: [
                [
                    "@babel/preset-env",
                    {
                        modules: false,
                    }
                ],
                "@babel/preset-flow",
                "@babel/preset-stage-0",
            ],
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("esm/")),
);

gulp.task("build:cjs", () =>
    gulp.src("esm/**/*.js")
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
    gulp.src("cjs/**/*.test.js", {
        read: false,
    })
        .pipe(mocha())
        .on("error", () =>
            process.exit(1),
        ),
);

gulp.task("dist:development", () =>
    webpack("", "core.js", "development"),
);

gulp.task("dist:production", () =>
    webpack("", "core.min.js", "production"),
);

gulp.task("default", gulp.series("clean", "build:esm", "build:cjs", "test", "dist:development", "dist:production"));
