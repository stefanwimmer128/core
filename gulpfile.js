/* @flow */

const del = require("del");
const gulp = require("gulp");
const babel = require("gulp-babel");
const mocha = require("gulp-mocha");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const rollup = require("rollup-stream");
const rollupCommonjs = require("rollup-plugin-commonjs");
const rollupReplace = require("rollup-plugin-replace");
const rollupResolve = require("rollup-plugin-node-resolve");
const rollupSourcemaps = require("rollup-plugin-sourcemaps");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");

gulp.task("clean", () => del([
    "cjs/",
    "esm/",
    "dist/",
]));

gulp.task("build:esm", () => gulp
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

gulp.task("build:cjs", () => gulp
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

gulp.task("test", () => gulp
    .src("cjs/**/*.test.js", {
        read: false,
    })
    .pipe(mocha())
    .on("error", () =>
        process.exit(1),
    ),
);

function rollupConfig(env) {
    return {
        cache: rollupConfig.cache,
        input: "./esm/index.js",
        plugins: [
            rollupSourcemaps(),
            rollupReplace({
                "process.env.NODE_ENV": JSON.stringify(env),
            }),
            rollupCommonjs(),
            rollupResolve({
                browser: true,
            }),
        ],
        
        format: "umd",
        name: "core",
        sourcemap: true,
    };
}

gulp.task("bundle:development", () =>
    rollup(rollupConfig("development"))
    .pipe(source("index.js", "./esm"))
    .pipe(buffer())
    .pipe(sourcemaps.init({
        loadMaps: true,
    }))
    .pipe(rename("core.js"))
    .pipe(sourcemaps.mapSources(path => `./core/src/${path}`))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/")),
);

gulp.task("bundle:production", () =>
    rollup(rollupConfig("production"))
    .pipe(source("index.js", "./esm"))
    .pipe(buffer())
    .pipe(sourcemaps.init({
        loadMaps: true,
    }))
    .pipe(uglify())
    .pipe(rename("core.min.js"))
    .pipe(sourcemaps.mapSources(path => `./core/src/${path}`))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/")),
);

gulp.task("default", gulp.series(
    "clean",
    "build:esm",
    "build:cjs",
    "test",
    "bundle:development",
    "bundle:production",
));
