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
    babel as babelConfig,
    version,
} from "./package.json";

gulp.task("test", () =>
    gulp.src("src/**/*.test.js", {
        read: false,
    })
        .pipe(mocha({
            require: "@babel/register",
        }))
        .on("error", () =>
            process.exit(1),
        ),
);

gulp.task("clean", () =>
    del([
        "cjs/",
        "dists/",
        "es6/",
    ]),
);

gulp.task("build-es6", () =>
    gulp.src([
        "src/**/*.js",
        "!**/*.test.js",
    ])
        .pipe(sourcemaps.init())
        .pipe(replace("${VERSION}", version))
        .pipe(babel(set(set(babelConfig, "babelrc", false), "presets[0]", [
            "@babel/preset-env",
            {
                modules: false,
            },
        ])))
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

gulp.task("default", gulp.series("test", "clean", "build-es6", "build-js", "dist", "minify"));
