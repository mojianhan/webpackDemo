const webpack = require('webpack')
const merge = require('webpack-merge')
const BabiliPlugin = require('babili-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: "source-map",
  plugins: [
    new BabiliPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
      uglifyOptions: {
        output: null
      }
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
})