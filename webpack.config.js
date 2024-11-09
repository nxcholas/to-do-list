const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: false,
  target: 'web',
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Optional: cleans the output directory before each build
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Serve files from the 'dist' directory
    },
    compress: true, // Enable gzip compression
    port: 8080, // You can specify a different port if needed
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
    historyApiFallback: true, // For single-page applications using HTML5 History API
    watchFiles: ['src/**/*.html'], // Watch HTML files for changes and subdirectories
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Restaurant Page',
      filename: 'index.html',
      inject: false,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
