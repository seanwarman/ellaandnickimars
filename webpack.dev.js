const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './build',
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true
  },
  mode: 'development',
})
