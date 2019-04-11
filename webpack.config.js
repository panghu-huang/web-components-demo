const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolve = absolutePath => path.resolve(__dirname, absolutePath)

const NODE_ENV = process.env.NODE_ENV

module.exports = {
  mode: NODE_ENV,
  stats: 'errors-only',
  entry: {
    'register-components': resolve('src/scripts/register-components.ts'),
    index: resolve('src/scripts/index.ts'),
    others: resolve('src/scripts/others.ts'),
  },
  output: {
    path: resolve('dist'),
    filename: 'scripts/[name].js',
  },
  resolve: {
    alias: {
      src: resolve('src'),
    },
    extensions: [
      '.ts', '.js'
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          transpileOnly: false,
        },
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'index.html',
      template: resolve('src/pages/index.html'),
      chunks: ['register-components', 'index'],
      chunksSortMode: 'dependency',
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'others.html',
      template: resolve('src/pages/others.html'),
      chunks: ['register-components', 'others'],
      chunksSortMode: 'dependency',
    })
  ],
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    contentBase: resolve('dist'),
  },
}
