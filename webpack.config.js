const basePath = require('./build/helpers').basePath

module.exports = {
  entry: ['./src/main.js'],
  output: {
    path: basePath('dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': basePath('src'),
      'config': basePath('config')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [basePath('src')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [basePath('src')]
      },
    ]
  }
}
