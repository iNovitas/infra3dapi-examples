const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sa|sc|c)ss$/, // styles files
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: "webgis-bundle.js",
        path: path.resolve(__dirname, "dist"),
        library: "mywebgis",
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html", // to import index.html file inside index.js
        }),
        new CopyPlugin({
            patterns: [
                // Specify which files from node_modules you want to copy
                { from: 'node_modules/@inovitas/infra3dapi', to: 'vendor' },
                // Add more patterns for other libraries if needed
            ],
        }),
    ],
    externals: {
        // Specify the library and its global variable name
        '@inovitas/infra3dapi': 'infra3dapi'
    }
};