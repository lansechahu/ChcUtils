const pkg = require('./package.json');
const webpack = require('webpack');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + "/build",
        filename: 'ChcUtils.min.js',
        libraryTarget: "umd",
        umdNamedDefine: true,
    },

    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    }
};