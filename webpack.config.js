const path = require('path')

module.exports = {
    entry: './src/handler.ts',
    devtool: 'inline-source-map',
    target: 'node',
    mode: 'production',
    externals: {
        'aws-sdk': 'aws-sdk'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        libraryTarget: 'commonjs',
        filename: 'handler.js',
        path: path.resolve(__dirname, 'dist')
    }
}
