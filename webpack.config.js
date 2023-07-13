const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

function getPlugins() {
  const plugins = [new HtmlWebpackPlugin({ template: 'src/index.html' })];
  if (isProd) {
    plugins.push(new UglifyJSPlugin());
  } else {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }
  return plugins;
}

module.exports = {
  entry: ['react-hot-loader/patch', './src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: getPlugins(),
  devServer: {
    contentBase: './',
    historyApiFallback: true,
    hot: true
  }
};
