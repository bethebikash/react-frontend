// requirements: webpack ,  webpack-cli

const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },

    output: {
        // path.resolve :
        // path.join :
        path: path.resolve(__dirname, 'dist'),  
        filename: 'main.js'
    },

    //we can use different rules by adding different object.
    module: {
        rules: [
            {
                // babel use garera  es5, es6, es7, browser compatable.
                // use babel on which files
                // \ is used to escape a character.
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    }
}
