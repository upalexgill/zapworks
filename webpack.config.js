const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { templates } = require('./templates');

module.exports = {
  entry: {
    'face-tracking': './src/face-tracking/index.js',
    'image-tracking': './src/image-tracking/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.wasm'],
  },
  plugins: [
    ...templates.map((template) => new HtmlWebpackPlugin(template)),
  ],
  devServer: {
    contentBase: './dist/',
    historyApiFallback: true,
    https: true,
    hot: true,
    open: true,
    host: '0.0.0.0',
    useLocalIp: true,
    port: 8080,
  },
  module: {
    rules: [
      { test: /\.ts?$/, loader: 'ts-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(zpt|png|gif|glb|gltf|jpe?g|ogg|mp3|obj|fbx|wav|ttf|fnf|woff|stl|mp4|hdr|webm)$/,
        use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'assets',
            name: '[sha256:hash:base64:16].[ext]',
          },
        }],
      },
      {
        test: /zcv\.wasm$/,
        type: 'javascript/auto',
        loader: 'file-loader',
      },
    ],
  },
};
