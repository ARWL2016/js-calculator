var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-souce-map',
    entry: [
        path.resolve(__dirname, 'app/src/index')
    ],

    target: "web", //default
    output: {
        path: path.resolve(__dirname, 'app/build'),
        publicPath: '/',
        filename: 'bundle.js'
    },


    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    }


}