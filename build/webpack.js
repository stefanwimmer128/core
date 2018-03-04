import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import {
    join,
} from "path";
import webpack from "webpack";

export default function (entry = "", output = "core.js") {
    return new Promise((resolve, reject) =>
        webpack({
            devtool: "source-map",
            entry: `./${join("es6", entry)}`,
            mode: "development",
            module: {
                rules: [
                    {
                        test: /\.js(\?\S*)?$/,
                        use: [
                            "source-map-loader",
                        ],
                    },
                ],
            },
            output: {
                filename: output,
                library: "core",
                libraryTarget: "umd",
                path: join(__dirname, "../dist"),
            },
            plugins: [
                new FriendlyErrorsWebpackPlugin(),
            ],
        }, (err, stats) => {
            if (err) {
                console.error(err.stack || err);
                if (err.details) {
                    console.error(err.details);
                }
                reject();
            } else {
                console.log(stats.toString({
                    colors: true,
                }));
                
                if (stats.hasErrors())
                    reject();
                else
                    resolve();
            }
        }),
    );
}
