const gulp = require("gulp");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const path = require("path");
const rollup = require("rollup-stream");
const rollupCommonjs = require("rollup-plugin-commonjs");
const rollupReplace = require("rollup-plugin-replace");
const rollupResolve = require("rollup-plugin-node-resolve");
const rollupSourcemaps = require("rollup-plugin-sourcemaps");
const buffer = require("vinyl-buffer");
const source = require("vinyl-source-stream");

module.exports = function _rollup(input, output, env, name) {
    let stream = rollup({
        cache: _rollup.cache,
        input,
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
        name,
        sourcemap: true,
    })
        .pipe(source(path.basename(input), `./${path.dirname(input)}`))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true,
        }));
    
    if (env === "production")
        stream = stream.pipe(uglify());
    
    return stream.pipe(rename(path.basename(output)))
        .pipe(sourcemaps.mapSources((src, file) => {
            if (! /node_modules/.test(src) && path.dirname(src) !== ".")
                for (let i = 0; i < path.dirname(src).split("/").length / 2; i++)
                    src = path.join(path.dirname(src), "..", path.basename(src));
            
            return `./${path.join(path.basename(file.path), "src", src)}`;
        }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(path.dirname(output)));
};
