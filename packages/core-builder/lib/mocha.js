/* @flow */

const {
    spawn,
} = require("child_process");
const _glob = require("glob");
const {
    dirname,
    join,
} = require("path");
const {
    promisify,
} = require("util");

const glob = promisify(_glob);

module.exports = async function _mocha() {
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
};
