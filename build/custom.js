import gulp from "gulp";
import rename from "gulp-rename";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import {
    basename,
    join,
} from "path";
import yargs from "yargs";

import webpack from "./webpack";

import "../gulpfile.js";

function filename(filename) {
    return /.js$/.test(filename) ? filename : `${filename}.js`;
}

yargs.usage("$0 [build...]", "Build custom bundle",
    yargs => yargs
        .positional("build", {
            default: [],
            type: "string",
        })
        .option("mode", {
            default: "development",
            type: "string",
        })
        .example("$0 event", "Bundle ./es6/event/index.js to dist/event.js")
        .example("$0 class/createPrivate:private", "Bundle ./class/createPrivate.js to dist/private.js")
        .epilog("More information: https://yarn.pm/@stefanwimmer128/core"),
    argv => {
        if (argv.build.length > 0) {
            gulp.series("clean", "build-es6")(err => {
                if (err)
                    throw err;
                
                (async function () {
                    for (const build of argv.build) {
                        let entry = build,
                            output = filename(basename(build));
                        if (/:/.test(build)) {
                            entry = entry.split(":")[0];
                            output = output.split(":")[1];
                        }
                        
                        console.log(`${entry} -> ${output}`);
                        
                        await webpack(entry, output, argv.mode);
                        
                        await new Promise(resolve =>
                            gulp.src(join("dist", output))
                                .pipe(sourcemaps.init({
                                    loadMaps: true,
                                }))
                                .pipe(rename({
                                    suffix: ".min",
                                }))
                                .pipe(uglify())
                                .pipe(sourcemaps.write("."))
                                .pipe(gulp.dest("dist/"))
                                .on("end", resolve),
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
