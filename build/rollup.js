const gulp = require("gulp");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const path = require("path");
const rollup = require("rollup-stream");
const rollupAlias = require("rollup-plugin-alias");
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
            rollupAlias({
                "flow-runtime": require.resolve("flow-runtime/dist/flow-runtime.umd.js"),
            }),
            rollupResolve(),
            rollupCommonjs({
                namedExports: {
                    "node_modules/flow-runtime/dist/flow-runtime.umd.js": [
                        "reify",
                        "Type",
                    ],
                },
            }),
        ],
        
        format: "umd",
        name,
        sourcemap: true,
        sourcemapFile: path.basename(output),
    })
        .pipe(source(path.basename(input), `./${path.dirname(input)}`))
        .pipe(buffer())
        .pipe(sourcemaps.init({
            loadMaps: true,
        }));
    
    if (env === "production")
        stream = stream.pipe(uglify());
    
    return stream.pipe(rename(path.basename(output)))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(path.dirname(output)));
};
