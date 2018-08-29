var path = require('path');
// var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// var UglifyJsPlugin  = require('uglifyjs-webpack-plugin');

module.exports = {
    entry : './src/js/app.js',
    output : {
        path : path.resolve( __dirname, 'dist' ),
        filename : 'main.js',
        publicPath : '/dist'
    },
    module : {
        // loaders : [
        //     {
        //         test : /\.css$/,
        //         loaders : ["style-loader","css-loader"]
        //     }
        // ]
        rules: [
            {
                test : /\.css$/,
                use : ['style-loader','css-loader']
            }
        ]
    },
    // optimization: {
    //     minimizer: [
    //         new UglifyJsPlugin()
    //     ]
    // } 
};