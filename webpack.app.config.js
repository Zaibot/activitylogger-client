const webpack = require(`webpack`);
const path = require(`path`);
const NodeExternals = require(`webpack-node-externals`);
const BabiliPlugin = require(`babili-webpack-plugin`);

const prodFn = (yes) => process.env.NODE_ENV === 'production' ? yes : function () { };
const prodIf = (yes, no) => process.env.NODE_ENV === 'production' ? yes : no;

const babelOptions = {
  "babelrc": false,
  "presets": [
    ["es2015", { modules: false }],
    "stage-0"
  ],
  "plugins": [
    "transform-runtime"
  ]
};
const babelModulesOptions = {
  "babelrc": false,
  "presets": [
    "es2015",
    "stage-0"
  ],
  "plugins": [
    "add-module-exports",
    "transform-runtime",
  ]
};

module.exports = {
  devtool: "source-map",
  cache: true,
  context: path.join(__dirname, `src`),
  entry: {
    'app': [`long`, `./launch`],
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
      include: path.join(__dirname, `src`),
      loaders: [{ loader: 'babel-loader', options: babelOptions }, 'ts-loader'],
    }, {
      test: /\.jsx?$/,
      include: path.join(__dirname, `node_modules`),
      loaders: [{ loader: 'babel-loader', options: babelModulesOptions }],
    }]
  },
  externals: [
    NodeExternals(),
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': prodIf(`'production'`, `'development'`)
      }
    }),
    prodFn(new BabiliPlugin()),
  ],
  resolve: {
    extensions: [`.tsx`, `.ts`, `.js`]
  }
};
