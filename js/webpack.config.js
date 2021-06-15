var path = require('path');

var webpack = require("webpack");

module.exports = {
    entry: './bundle.js',
    output: {
        filename: './script.js',
        // path: path.resolve(__dirname, 'dist')
    },
    mode: "development",
};