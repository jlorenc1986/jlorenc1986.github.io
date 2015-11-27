var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './app/app'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      },
      '__DEVTOOLS__': process.env.DEVTOOLS === 'true' ? true : false
    }),
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
