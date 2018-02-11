import del from "del";
import {
    readdirSync,
    writeFileSync,
} from "fs";
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
import webpack from "webpack-promise";

import __webpackConfig from "./webpack.config";

gulp.task("clean", () =>
    del([
        "public/*",
    ], {
        ignore: [
            ".git",
        ],
    }),
);

gulp.task("build", () =>
    webpack(__webpackConfig),
);

gulp.task("docs", next => {
    const docs = readdirSync(join(__dirname, "docs/")),
        data = {
            index: read(join(__dirname, "docs/index.md")),
        };
    
    data.groups = docs.filter(path =>
        path !== "index.md",
    ).map(name => ({
        docs: readdirSync(join(__dirname, "docs/", name)).map(file =>
            read(join(__dirname, "docs/", name, file)),
        ).map(data => extend(data, {
            path: basename(data.path, ".md"),
        })).sort((a, b) =>
            a.path.toLowerCase() < b.path.toLowerCase() ? -1 : 1,
        ),
        name,
    }));
    
    writeFileSync(join(__dirname, "public/docs.json"), JSON.stringify(data));
    
    next();
});

gulp.task("default", gulp.series("clean", "build", "docs"));
