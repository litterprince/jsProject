const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

let config = {
    entry: {
        main: path.join(__dirname, 'src/main.js')
    },
    output: {
        filename: "[name].js",
        path: path.join(__dirname, 'dist'),
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude: /node_modules/
            },
            {
                test:/\.jsx$/,
                loader:'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        alias: {
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV' : isDev ? '"development"':'"production"'
            }
        })
    ]
};

if(isDev){
    config.devServer = {
        host: '0.0.0.0',
        port: '8099',
        overlay: {
            errors: true
        },
        hot: true
    };
    config.devtool = 'cheap-module-eval-source-map';
    config.module.rules.push(
        {
            test:/\.css$/,
            use:['style-loader','css-loader','postcss-loader']
        },
        {
            test:/\.less$/,
            use:['style-loader','css-loader','postcss-loader','less-loader']
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-aaa.[ext]'
                    }
                }
            ]
        }
    );
    config.plugins.push(
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    );
}else{
    config.output = {
        filename: "js/[name].[chunkhash:6].js",
        path: path.join(__dirname, 'dist'),
        chunkFilename: 'js/[name].[id].[chunkhash:6].js'
    };
    config.devtool = 'source-map';
    config.module.rules.push(
        {
            test:/\.css$/,
            use:ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:['css-loader','postcss-loader'],
                publicPath:'../'
            })
        },
        {
            test:/\.less$/,
            use:ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:['css-loader','postcss-loader','less-loader'],
                publicPath:'../'
            })
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: 'img/[name].[ext]'
                    }
                }
            ]
        }
    );
    config.plugins.push(
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
        new UglifyJsPlugin({sourceMap: true}),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                let flag =  module.context && module.context.indexOf('node_modules') !== -1;
                console.log(module.context, flag);
                return flag;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor'],
        }),
        new ExtractTextPlugin('css/[name].[contentHash:8].css'),
        new OptimizeCSSPlugin({
            safe: true, map: { inline: false }
        })
    )
}

module.exports = config;
