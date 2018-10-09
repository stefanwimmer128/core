/* @flow*/

import {
    join,
    relative,
} from "path";
import {
    rollup,
} from "rollup";
import alias from "rollup-plugin-alias";
import commonjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import sourcemaps from "rollup-plugin-sourcemaps";
import {
    uglify,
} from "rollup-plugin-uglify";

// $FlowFixMe
export default async function _rollup(options, env) {
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
