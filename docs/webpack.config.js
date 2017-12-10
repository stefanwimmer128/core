import CleanWebpackPlugin from "clean-webpack-plugin";
import ExtractTextWebpackPlugin from "extract-text-webpack-plugin";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import HtmlWebpackTemplate from "html-webpack-template";
import {
    extend,
} from "lodash";
import {
    join,
} from "path";
import {
    EnvironmentPlugin,
    HotModuleReplacementPlugin,
    NamedModulesPlugin,
    NoEmitOnErrorsPlugin,
    ProvidePlugin,
} from "webpack";

const __babelLoader = {
    loader: "babel-loader",
    options: {
        babelrc: false,
        presets: [
            [
                "@babel/preset-env",
                {
                    modules: false,
                    shippedProposals: true,
                },
            ],
        ],
    },
};

function fileLoader(outputPath) {
    return {
        loader: "file-loader",
        options: {
            name: "[name].[ext]?[hash]",
            outputPath,
        },
    };
}

function sourceMapLoader(loader, options) {
    return {
        loader,
        options: extend({
            sourceMap: true,
        }, options),
    };
}

export default {
    devServer: {
        contentBase: join(__dirname, "public/"),
        historyApiFallback: true,
        hot: true,
    },
    devtool: "source-map",
    entry: "./src",
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.js(\?\S*)?$/,
                use: __babelLoader,
            },
            {
                test: /\.scss(\?\S*)?$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: sourceMapLoader("style-loader"),
                    use: [
                        sourceMapLoader("css-loader", {
                            importLoaders: 1,
                        }),
                        sourceMapLoader("postcss-loader"),
                        sourceMapLoader("sass-loader"),
                    ],
                }),
            },
            {
                test: /\.vue(\?\S*)?$/,
                use: {
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            js: __babelLoader,
                            scss: ExtractTextWebpackPlugin.extract({
                                fallback: sourceMapLoader("vue-style-loader"),
                                use: [
                                    sourceMapLoader("css-loader", {
                                        importLoaders: 1,
                                    }),
                                    sourceMapLoader("postcss-loader"),
                                    sourceMapLoader("sass-loader"),
                                ],
                            }),
                        },
                    },
                },
            },
            {
                test: /\.(ttf|woff)(\?\S*)?$/,
                use: fileLoader("fonts/"),
            },
        ],
    },
    output: extend({
        filename: "main.js?[hash]",
        path: join(__dirname, "public/"),
    }, process.env.NODE_ENV === "development" ? {
        library: "$",
        libraryExport: "default",
        libraryTarget: "window",
    } : {}),
    plugins: [
        new CleanWebpackPlugin([
            "public/",
        ], {
            exclude: [
                ".git",
            ],
        }),
        new EnvironmentPlugin([
            "NODE_ENV",
        ]),
        new FriendlyErrorsWebpackPlugin(),
        new HtmlWebpackPlugin({
            appMountId: "app",
            baseHref: "/",
            inject: false,
            meta: [
                {
                    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
                    name: "viewport",
                },
            ],
            template: HtmlWebpackTemplate,
            title: "@stefanwimmer128/core",
        }),
        new NoEmitOnErrorsPlugin(),
        new ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper: [
                "popper.js",
                "default",
            ],
        }),
        ...(process.argv.some(arg =>
            arg.includes("webpack-dev-server"),
        ) ? [
            new ExtractTextWebpackPlugin({
                disable: true,
            }),
            new HotModuleReplacementPlugin(),
            new NamedModulesPlugin(),
        ] : [
            new ExtractTextWebpackPlugin("style.css?[hash]"),
        ]),
    ],
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js",
        },
        extensions: [
            ".js",
            ".vue",
        ],
    },
};
