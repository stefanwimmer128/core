/* @flow */

const {
    rollup,
} = require("rollup");
const alias = require("rollup-plugin-alias");
const commonjs = require("rollup-plugin-commonjs");
const replace = require("rollup-plugin-replace");
const resolve = require("rollup-plugin-node-resolve");
const sourcemaps = require("rollup-plugin-sourcemaps");
const {
    uglify,
} = require("rollup-plugin-uglify");

// $FlowFixMe
module.exports = async function _rollup(options, env) {
    const filename = options.basename + (env === "development" ? ".js" : ".min.js");
    
    await (await rollup({
        cache: (_rollup.cache = _rollup.cache || {}),
        input: "./esm/index.js",
        plugins: [
            sourcemaps(),
            replace({
                "process.env.NODE_ENV": JSON.stringify(env),
            }),
            alias({
                "flow-runtime": require.resolve("flow-runtime/dist/flow-runtime.umd.js"),
            }),
            resolve(),
            commonjs({
                namedExports: {
                    "../../node_modules/flow-runtime/dist/flow-runtime.umd.js": [
                        "reify",
                        "Type",
                    ],
                },
            }),
            ...(env === "production" ? [uglify()] : []),
        ],
    })).write({
        format: "umd",
        file: filename,
        dir: "dist/",
        name: options.name,
        sourcemap: true,
    });
};
