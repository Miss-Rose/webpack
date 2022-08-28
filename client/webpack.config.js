const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html')
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'build')
        },
        port: 3000,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
            { test: /\.css$/i, use: [ 'style-loader', 'css-loader' ] },
            { test: /\.html$/i, loader: "html-loader" },
            {
                test: /\.(png|svg|jpg|jpeg|gif|jfif)$/,
                type: 'asset/resource',
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',
            },
        ]
    },
    resolve: {
        extensions: [ '*', '.js', '.jsx', '.ts', '.tsx' ]
    }
};
