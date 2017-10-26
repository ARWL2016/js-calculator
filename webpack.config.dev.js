const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        path.resolve(__dirname, 'app/src/index')
    ],

    target: "web", //default
    output: {
        path: path.resolve(__dirname, 'app/dev-build'),
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
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader', 
                  use: ['css-loader', 'sass-loader']
                })

            }
        ]
    }, 
    plugins: [
      new ExtractTextPlugin('style.css')
    ]


}