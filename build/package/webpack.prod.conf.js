const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');
const CompressionPlugin = require('compression-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',
    entry: {
        main: './projects/vue2-libs/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../node_modules/vue2-libs'),
        publicPath: '/vue2-libs/',
        filename: 'vue2-libs.min.js', // 用于生成压缩后的文件
        library: 'vue2-libs',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        // @todo
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new UglifyJsPlugin({
            parallel: true,
            // min文件就不生产.map文件了，减小生成后的体积
            sourceMap: false
        }),
        // new CompressionPlugin({
        //     asset: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.(js|css)$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        // })
    ]
});
