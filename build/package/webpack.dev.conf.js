const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
    devtool: 'source-map',

    entry: {
        main: './projects/vue2-libs/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../../node_modules/vue2-libs'),
        publicPath: '/vue2-libs/',
        filename: 'vue2-libs.js', // 用于生成便于调试，未经压缩的文件
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
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ]
});
