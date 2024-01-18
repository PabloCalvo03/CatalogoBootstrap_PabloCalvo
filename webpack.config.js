'use strict'

const path = require('path')
const autoprefixer = require('autoprefixer')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/js/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 8080,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/html/catalogo.html', filename: "index.html" }),
    new HtmlWebpackPlugin({ template: './src/html/registro.html', filename: "registro.html" }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns:[
          {
            from:'src/layout/img',
            to:'multimedia',
          },
          {
            from:'src/views/img',
            to:'multimedia',
          },
          {
            from:'src/views/video',
            to:'multimedia',
          },
          {
            from:'src/js',
            to:'js',
          }
      ]
  })
  ],
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            // Loader for webpack to process CSS with PostCSS
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  autoprefixer
                ]
              }
            }
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
