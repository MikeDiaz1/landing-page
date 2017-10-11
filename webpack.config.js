var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    entry: [
        path.join(__dirname, 'src/index.js')
    ],
    output: {
        path: path.join(__dirname, '/dist/'),
        filename: '[name]-[hash].min.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.tpl.html',
            inject: 'body',
            filename: 'index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
            mangle: {
                screw_ie8: true
            },
            output: {
                comments: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        loaders: [
            {
                exclude: '/node_modules/',
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            outputStyle: 'compressed'
                        }
                    }
                ]
            },
            {
                test: /.(png|jpg|gif|svg|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    }
}];