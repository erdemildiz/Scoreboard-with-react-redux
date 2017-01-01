var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',
  assets: {
    style  : "style.[hash].css",
  }
});


module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    filename: 'index.bundle.js',
    path: __dirname + '/dist'
  },
  debug: true,
  resolve: {
     extensions: ['', '.js', '.jsx']
  },
  devServer: { hot: true },
  module: {
    loaders: [
      {
        test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: {
        presets: ['es2015', 'react']}
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./dist")]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
}
