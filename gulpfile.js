/* @flow */

import del from "del";
import gulp from "gulp";
import babel from "gulp-babel";
import rename from "gulp-rename";
import replace from "gulp-replace";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import webpack from "webpack";
import webpackStream from "webpack-stream";

gulp.task("build", () =>
    gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(replace("${VERSION}", require("./package.json").version))
        .pipe(babel({
            plugins: [
                [
                    "flow-runtime",
                    {
                        assert: true,
                    },
                ],
                "transform-class-properties",
                "transform-export-extensions",
            ],
            presets: [
                "env",
                "flow",
            ],
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("js/")),
);

gulp.task("clean", () =>
    del([
        "dist/",
        "js/",
    ]),
);

gulp.task("dist", () =>
    gulp.src("js/core.js")
        .pipe(webpackStream({
            devtool: "source-map",
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: [
                            "source-map-loader",
                        ],
                    },
                ],
            },
            output: {
                filename: "core.js",
                library: "core",
                libraryTarget: "umd",
            },
        }, webpack))
        .pipe(gulp.dest("dist/")),
);

gulp.task("minify", () =>
    gulp.src("dist/core.js")
        .pipe(sourcemaps.init({
            loadMaps: true,
        }))
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(uglify())
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist/")),
);

gulp.task("default", gulp.series("clean", "build", "dist", "minify"));
