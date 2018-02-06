const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|PNG|jpe?g|JPG|gif|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\/html$/,
        loader: 'html-withimg-loader',
      },
    ],
  },
  devServer: {
    inline: true,
    port: 8008,
  },
  plugins: [HtmlWebpackPluginConfig],
}
