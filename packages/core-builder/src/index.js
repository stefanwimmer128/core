/* @flow*/

import del from "del";
import gulp from "gulp";
import babel from "gulp-babel";
import replace from "gulp-replace";
import sourcemaps from "gulp-sourcemaps";

import mocha from "./mocha";
import rollup from "./rollup";

// $FlowFixMe
export default function (options) {
    gulp.task("clean", () =>
        del([
            "esm/",
            "cjs/",
            "dist/",
        ]),
    );
    
    gulp.task("build:esm", () =>
        gulp.src("src/**/*.js")
            .pipe(sourcemaps.init())
            .pipe(replace(/@stefanwimmer128\/.*\/src/g, match =>
                match.replace("/src", "/esm"),
            ))
            .pipe(babel({
                plugins: [
                    "@babel/plugin-proposal-export-namespace-from",
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
            .pipe(replace(/@stefanwimmer128\/.*\/esm/g, match =>
                match.replace("/esm", "/cjs"),
            ))
            .pipe(babel({
                plugins: [
                    "@babel/plugin-transform-modules-commonjs",
                    "@babel/plugin-transform-runtime",
                ],
            }))
            .pipe(sourcemaps.write("."))
            .pipe(gulp.dest("cjs/")),
    );
    
    gulp.task("test", () =>
        mocha(),
    );
    
    gulp.task("bundle:development", () =>
        rollup(options.bundle, "development"),
    );
    
    gulp.task("bundle:production", () =>
        rollup(options.bundle, "production"),
    );
    
    gulp.task("default", gulp.series(...[
        "clean",
        "build:esm",
        "build:cjs",
        ...(options.test === false ? [] : ["test"]),
        "bundle:development",
        "bundle:production",
    ]));
};
