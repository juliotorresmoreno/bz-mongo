
const path = require('path');

module.exports = {
    context: __dirname,
    entry: "./lib/index.js",
    target: "node",
    node: {
        __filename: false,
        __dirname: false
    },
    output: {
        path: __dirname,
        filename: 'build/actions/bundle.js',
        library: 'library',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ["env", "stage-3", "es2017"],
                    plugins: ["transform-object-rest-spread", "transform-export-extensions"]
                }
            },

        ]
    },
};