#!/usr/bin/env node

const gulp = require("gulp");
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const path = require("path");
const yargs = require("yargs");

const rollup = require("./rollup");

require("../gulpfile.js");

function filename(filename) {
    return /.js$/.test(filename) ? filename : `${filename}.js`;
}

yargs.usage("$0 [build...]", "Build custom bundle",
    yargs => yargs
        .positional("build", {
            default: [],
            type: "string",
        })
        .option("e", {
            alias: [ "env" ],
            default: process.env.NODE_ENV || "development",
            description: "Set build environment",
            type: "string",
        })
        .example("$0 ./utils/jsonp.js", "Bundle ./esm/event/index.js to ./dist/jsonp.js, Exposed globaly as `jsonp`")
        .example("$0 ./class/createPrivate:private", "Bundle ./esm/class/createPrivate.js to ./dist/private.js, Exposed globaly as `private`")
        .example("$0 ./class/index.js:./class.js:\$class", "Bundle ./esm/class/index.js to ./dist/class.js, Exposed globaly `$class`")
        .epilog("More information: https://yarn.pm/@stefanwimmer128/core"),
    argv => {
        if (argv.build.length > 0) {
            gulp.series("build:esm")(err => {
                if (err)
                    throw err;
                
                (async function () {
                    for (const build of argv.build) {
                        let input, output, name;
                        
                        if (/:/.test(build)) {
                            let paths = build.split(":");
                            
                            
                            input = paths[0];
                            output = paths[1];
                            
                            if (paths.length > 2)
                                name = paths[2];
                            else
                                name = path.basename(output, ".js");
                        } else {
                            input = paths;
                            output = path.basename(paths);
                            name = path.basename(paths, ".js");
                        }
                        
                        input = filename(`./${path.join("esm", input)}`);
                        output = filename(`./${path.join("dist", output)}`);
                        
                        console.log(`${input} -> ${output}`);
                        
                        await new Promise((resolve, reject) =>
                            rollup(input, output, argv.mode, name)
                                .on("end", resolve)
                                .on("error", reject),
                        );
                    }
                })();
            });
        }
    })
    .alias({
        h: "help",
        v: "version",
    })
    .strict()
    .argv;
