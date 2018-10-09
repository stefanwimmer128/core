/* @flow */

import {
    spawn,
} from "child_process";
import _glob from "glob";
import {
    dirname,
    join,
} from "path";
import {
    promisify,
} from "util";

const glob = promisify(_glob);

export default async function _mocha() {
    await new Promise(async (resolve, reject) =>
        spawn(join(dirname(require.resolve("mocha")), "bin/mocha"), [
            "--require", "source-map-support/register",
            ...(await glob("cjs/**/*.test.js")),
        ], {
            stdio: "inherit",
        }).on("close", (code, signal) =>
            code === 0 && signal === null ? resolve() : reject(
                signal ? new Error(`Premature termination: ${signal}`) : new Error(`Non-zero exit code: ${code}`),
            ),
        ),
    );
}
