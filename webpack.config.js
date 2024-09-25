const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './frontend/src/main.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? '[name].[contenthash].js' : 'bundle.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf|svg)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'assets/[name][ext]'
                    }
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: './frontend/public/index.html',
                filename: 'index.html'
            }),
            new webpack.DefinePlugin({
                __VUE_OPTIONS_API__: true,
                __VUE_PROD_DEVTOOLS__: !isProduction,
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: !isProduction
            })
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm-bundler.js'
            },
            extensions: ['.js', '.vue', '.svg']
        },
        devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'frontend/public'),
            },
            historyApiFallback: true,
            port: 8080,
            proxy: {
                '/api': 'http://localhost:8000'
            }
        }
    };
};