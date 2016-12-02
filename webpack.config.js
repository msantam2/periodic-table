let HtmlWebpackPlugin = require('html-webpack-plugin');
let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'head'
});

module.exports = {
  entry: './app/entry.js',
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
  	filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    stats: 'errors-only'
  },
  plugins: [HTMLWebpackPluginConfig]
};
