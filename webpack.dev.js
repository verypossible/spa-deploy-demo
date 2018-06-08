const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 3003
  },
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: '8080',
      proxy: 'http://localhost:3003',
      reload: false
    })
  ]
})
