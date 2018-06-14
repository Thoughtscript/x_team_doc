'use strict'

const extractTextPlugin = require('extract-text-webpack-plugin'),
  webpack = require('webpack'),
  resolve = dir => {
    return require('path').join(__dirname, dir)
  }

const reactAppRoot = 'reactAppSrc'
const publicPath = '/public'

module.exports = {
  entry: ['./' + reactAppRoot + '/entry.jsx'],
  output: {
    path: resolve(publicPath + '/built'),
    filename: 'built.min.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    /**
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
     */
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.min.js',
      minChunks (module) {
        return module.context && module.context.indexOf('node_modules') >= 0
      }
    }),
/**
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      output: {
        comments: false
      }
    }),
 */
    new extractTextPlugin({
      filename: '[name].min.css',
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [resolve(reactAppRoot)]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        include: [resolve(reactAppRoot)]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: extractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {minimize: true}},
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('postcss-smart-import'),
                  require('autoprefixer'),
                ]
              }
            },
            'sass-loader'
          ]
        })
      }
    ]
  }
}
