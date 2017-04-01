var path = require('path');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist/static'),
        publicPath: '/static/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue'],
        alias: {
            'src': path.resolve(__dirname, '../src'),
            'npm': path.resolve(__dirname, '../node_modules'),
            'vendor': path.resolve(__dirname, '../src/vendor'),
            'vue': 'vue/dist/vue.js'
        },
        root: [
            path.resolve(__dirname, '../src'),
            path.resolve(__dirname, '../node_modules')
        ]
    },
    resolveLoader: {
        root: [
            path.resolve(__dirname, '../node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'file'
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel!eslint',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    vue: {
        loaders: {
            js: 'babel!eslint'
        }
    },
    eslint: {
        formatter: require('eslint-friendly-formatter'),
        configFile: path.resolve(__dirname, '../.eslintrc.js')
    }
};
