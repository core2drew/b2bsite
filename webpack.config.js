const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/sass/index.scss',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: './'
              }
            }
          },
          'sass-loader',
        ],
        include: path.resolve(__dirname, '../')
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '/css/styles.css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      Variables: path.resolve(__dirname, 'src/sass/variables.scss')
    }
  }
};