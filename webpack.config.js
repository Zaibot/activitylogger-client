const webpack = require(`webpack`);
const path = require(`path`);
const NodeExternals = require(`webpack-node-externals`);
const BabiliPlugin = require(`babili-webpack-plugin`);

const prodFn = (yes) => process.env.NODE_ENV === 'production' ? yes : function () { };
const prodIf = (yes, no) => process.env.NODE_ENV === 'production' ? yes : no;

module.exports = {
  devtool: "source-map",
  cache: true,
  context: path.join(__dirname, `src`),
  entry: {
    'app': [`long`, `./launch`],
    'browser': [`long`, `./browser`],
  },
  output: {
    publicPath: './dist/',
    filename: `[name].js`,
    path: path.join(__dirname, `dist`),
  },
  target: `node`,
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    loaders: [{
      test: /\.tsx?$/,
      loader: 'ts-loader'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=1000000'
    },
    {
      test: /\.less$/,
      loaders: ['classnames-loader', 'style-loader', {
        loader: 'css-loader',
        options: {
          module: 1,
          importLoaders: 1
        }
      }, 'less-loader']
    },
    ]
  },
  externals: [
    NodeExternals({
      whitelist: [
        /@zaibot\/css-reset/
      ]
    }),
  ],
  plugins: [
    prodFn(new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': `'production'`
      }
    }),
      prodFn(new BabiliPlugin()),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': `'development'`
        }
      })),
  ],
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`]
  }
};
