var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: {
        index: './src/js/index.js',
        public: './src/js/public.js'
    },
    output: {
        filename: './js/[name]-min.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: "/node_modules/",
                include: path.resolve(__dirname, "/src/"),
                loader: "babel-loader"
            },
            { test: /\.css$/, loader: "style-loader!css-loader?importLoaders=1!postcss-loader" },
            { test: /\.html$/, loader: "html-loader" },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                loaders: [
                    'url-loader?limit=40000&name=img/[name]-min.[ext]',
                    'img-loader',
                ]
            },
            {
                test: /\.properties$/,
                loader: 'file-loader',
                options: {
                    name: 'strings/[name].[ext]',
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            "template": './index.html',
            'filename': 'index.html',
            'inject': 'footer',
            "chunks": ["index"],
            "minify": {
                "removeComments": true,
                "collapseWhitespace": true,
            },

        }),
        new htmlWebpackPlugin({
            "template": './src/faq.html',
            'filename': 'faq.html',
            'inject': 'footer',
            "chunks": ["public"],
            "minify": {
                "removeComments": true,
                "collapseWhitespace": true,
            }
        }),
        new htmlWebpackPlugin({
            "template": './src/userAgreement.html',
            'filename': 'userAgreement.html',
            'inject': 'footer',
            "chunks": ["public"],
            "minify": {
                "removeComments": true,
                "collapseWhitespace": true,
            }
        }),
        new htmlWebpackPlugin({
            "template": './src/aboutUs.html',
            'filename': 'aboutUs.html',
            'inject': 'footer',
            "chunks": ["public"],
            "minify": {
                "removeComments": true,
                "collapseWhitespace": true,
            }
        })
    ]

}