import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import {
    join,
} from "path";
import webpack, {
    DefinePlugin,
} from "webpack";

export default function (entry, output, mode) {
    return new Promise((resolve, reject) =>
        webpack({
            devtool: "source-map",
            entry: `./${join("esm", entry)}`,
            mode,
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
                new DefinePlugin({
                    "process.env.NODE_ENV": mode,
                }),
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
