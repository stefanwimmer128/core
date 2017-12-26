/* @flow */

import del from "del";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import gulp from "gulp";
import babel from "gulp-babel";
import mocha from "gulp-mocha";
import rename from "gulp-rename";
import replace from "gulp-replace";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import {
    set,
} from "lodash";
import {
    join,
} from "path";
import {
    NoEmitOnErrorsPlugin,
} from "webpack";
import webpack from "webpack-promise";

import {
    version,
} from "./package.json";

gulp.task("clean", () =>
    del([
        "cjs/",
        "dists/",
        "es6/",
    ]),
);

gulp.task("build-es6", () =>
    gulp.src("src/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(replace("${VERSION}", version))
        .pipe(babel({
            babelrc: false,
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
        .pipe(gulp.dest("es6/")),
);

gulp.task("build-js", () =>
    gulp.src("es6/**/*.js")
        .pipe(sourcemaps.init({
            loadMaps: true,
        }))
        .pipe(babel({
            babelrc: false,
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

gulp.task("dist", () =>
    webpack({
        devtool: "source-map",
        entry: `./${join("es6", process.env.ENTRY || "")}`,
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
            path: join(__dirname, "dist/"),
        },
        plugins: [
            new FriendlyErrorsWebpackPlugin(),
            new NoEmitOnErrorsPlugin(),
        ],
    }),
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

gulp.task("default", gulp.series("clean", "build-es6", "build-js", "test", "dist", "minify"));
