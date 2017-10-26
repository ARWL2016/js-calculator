var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
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
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            }
        ]
    }


}