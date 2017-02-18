var path = require('path'); 

module.exports = {
  devtool: 'inline-souce-map',
  entry: [
    path.resolve(__dirname, 'src/index')
  ],

  target: "web", //default
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  // module: {
  //   loaders: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loaders: ['babel']
  //     }
  //   ]
  // }


}