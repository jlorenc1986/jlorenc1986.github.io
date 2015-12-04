var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/app'
  ],
  output: {
    filename: '[name].min.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      },
      '__DEVTOOLS__': false
    }),
    new webpack.optimize.UglifyJsPlugin({
     compressor: {
       warnings: false
     }
   }),
   new ExtractTextPlugin('app.scss', { allChunks: true }),
    new HtmlWebpackPlugin({
      title: 'jlorenc1986',
      filename: 'index.html',
      template: 'index.template.html',
      favicon: path.join(__dirname, 'assets', 'images', 'favicon.ico')
    })
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader!cssnext-loader' },

    {
        test: /\.(jpg|png|gif|svg)$/i,
        loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    },

      { test: /\.scss$/, loaders:["style","css","sass"] },
      { test: /\.js$/, exclude: /node_modules/ , loaders: ['react-hot', 'babel'] }
    ]
  }
};
