const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    chunkFilename: '[id].js'
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/components'),
      Containers: path.resolve(__dirname, 'src/containers'),
      Pictures: path.resolve(__dirname, 'src/assets/pictures'),
      Fonts: path.resolve(__dirname, 'src/assets/fonts')
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              indent:   'postcss',
              plugins: () => [ autoprefixer({}) ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        loader: 'url-loader?limit=10000&name=img/[name].[ext]'
      },
      {
        test: /\.(svg|eot|woff2?|ttf|otf)/,
        loader: 'file-loader'
      }
    ]
  }
}

