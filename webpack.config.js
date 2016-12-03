let HtmlWebpackPlugin = require('html-webpack-plugin');
let HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'head'
});

module.exports = {
  entry: './src/index.js',
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        loaders: ['style', 'css'] // same as "style-loader!css-loader"
      }
    ]
  },
  output: {
    path: __dirname + '/dist',
  	filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devServer: {
    contentBase: './dist',
    inline: true,
    stats: 'errors-only'
  },
  plugins: [HTMLWebpackPluginConfig]
};
