var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },
    watch: true,
    devtool: 'source-map',
};