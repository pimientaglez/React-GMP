const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // define entry file and output
    entry: './src/index.js',
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
        template: "./public/index.html",
        filename: "./index.html",
    })],
    // define babel loader
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread', 'transform-class-properties' ]
                }
            }
        },
        {
            test: /\.html$/i,
            loader: 'html-loader',
        },
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        }
        ]
    }
};