const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                use: [
                    {
                        loader: 'style-loader', //is a webpack plugin that injects the compiled css file in the DOM.
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'less-loader',
                    },
                ]
            },
        ]
    }
});
