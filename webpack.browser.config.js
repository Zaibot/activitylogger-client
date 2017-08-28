const webpack = require(`webpack`);
const path = require(`path`);
const NodeExternals = require(`webpack-node-externals`);
const BabiliPlugin = require(`babili-webpack-plugin`);

const prodIf = (yes, no) => process.env.NODE_ENV === 'production' ? yes : no;
const prodFn = (yes) => prodIf(yes, function() { });

const babelOptions = {
    "babelrc": false,
    "presets": [
        "react",
        "stage-0"
    ],
    // "plugins": [
    //   "transform-runtime"
    // ]
};
const babelModulesOptions = {
    "babelrc": false,
    "presets": [
        "stage-0"
    ],
    // "plugins": [
    //   "transform-runtime",
    // ]
};

module.exports = {
    devtool: "source-map",
    cache: true,
    context: path.join(__dirname, `src`),
    entry: {
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
        __dirname: true,
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            include: path.join(__dirname, `src`),
            loaders: [{ loader: 'babel-loader', options: babelOptions }, 'ts-loader'],
        }, {
            test: /\.jsx?$/,
            include: path.join(__dirname, `node_modules`),
            exclude: [/babel-runtime/, /core-js/],
            loaders: [{ loader: 'babel-loader', options: babelModulesOptions }],
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
        }]
    },
    externals: [
        /* formidable defined as external, problem with GENTLY in that module, which creates a require var overriding the global require */
        prodIf(
            (context, request, callback) => /electron|formidable/.test(request) ? callback(null, `commonjs ${request}`) : callback(),
            NodeExternals({ whitelist: [/@zaibot\/css-reset/] })
        )
    ],
    plugins: [
        new webpack.DefinePlugin({
            /* 'GENTLY': 'false' didn't work */
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
