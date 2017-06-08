/// <binding AfterBuild='Run - Development' />
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './Client/app/app.js',
        vendor: ['angular', 'angular-ui-router']
    },
    output: {
        path: __dirname + '/wwwroot',
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
            { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
    ]
};

//https://webpack.js.org/guides
//http://blog.teamtreehouse.com/26017-2