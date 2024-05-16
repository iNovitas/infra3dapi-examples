const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: "[name].bundle.js",
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html", // to import index.html file inside index.js
        }),
        new CopyPlugin({
            patterns: [
                // Specify which files from node_modules you want to copy
                { from: 'node_modules/@inovitas/infra3dapi', to: '' },
                // Add more patterns for other libraries if needed
            ],
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};