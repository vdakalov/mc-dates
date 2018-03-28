const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.module'/*,
    vendor: [
      'angular-material/angular-material.js',
      'angular-animate/angular-animate.js',
      'angular-aria/angular-aria.js'
    ]*/
  },
  output: {
    path: path.resolve(__dirname, 'target'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loader: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      use: ['file-loader?name=[name].[ext]&context=src&useRelativePath=true']
    }, {
      test: /\.css$/,
      use: ['file-loader?name=[name].[ext]&context=src&useRelativePath=true']
    }]
  }
};
