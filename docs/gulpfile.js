import del from "del";
import fs from "fs";
import {
    extend,
} from "lodash";
import gulp from "gulp";
import {
    read,
} from "gray-matter";
import {
    basename,
    join,
} from "path";
import {
    promisify,
} from "util";
import webpack from "webpack-promise";

import __webpackConfig from "./webpack.config";

const readdir = promisify(fs.readdir);
const writeFile = promisify(fs.writeFile);

gulp.task("clean", () =>
    del([
        "public/*",
        "src/docs.json",
    ], {
        ignore: [
            ".git",
        ],
    }),
);

gulp.task("docs", async () => {
    const files = await readdir(join(__dirname, "docs/"));
    const data = files.map(file =>
        read(join(__dirname, "docs/", file)),
    ).map(file => extend(file, {
        path: basename(file.path, ".md"),
    }));
    await writeFile(join(__dirname, "src/docs.json"), JSON.stringify(data));
});

gulp.task("build", () =>
    webpack(__webpackConfig),
);

gulp.task("default", gulp.series("clean", "docs", "build"));
