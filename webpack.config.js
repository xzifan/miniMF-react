const path = require( 'path' );
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

module.exports = {
    // bundling mode
    mode: process.env.NODE_ENV,
    // entry files
    entry: './src/index.tsx',
    // output bundles (location)
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    // file resolutions
    resolve: {
        extensions: ['.ts', '.js', '.tsx'],
    },
    // loaders
    module: {
        rules: [
            { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/ },
            {
                test: /\.scss|css$/,
                exclude: /\.module.(s(a|c)ss)$/,
                use: [ 'style-loader','css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[hash:4].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HotModuleReplacementPlugin({}),
        new HtmlWebpackPlugin({
            filename: 'index.html', // name of file that will be outputted to 'src' when built
            template: './index.html',// path to your html file relative to config
            inject: true
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, './'),
            watch: true
        },
        port: 7001,
        open: true,
        compress: false
    }
};