var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: ['./javascript/entry.js', './scss/main.scss'],
  output: {
    filename: './bundle.js'
  },
  module: {

    rules: [
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader','postcss-loader','sass-loader']
            })
        }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: './[name].bundle.css',
      allChunks: true,
    }),
  ],
};