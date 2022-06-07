const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const productionConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        // publicPath: 'container/latest/', // assign this path after configuring in AWS bucket & cloudfront
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/latest/remoteEntry.js`,
                nextjsapp: `nextjsapp@${domain}/nextjsapp/latest/remoteEntry.js`,
            },
            shared: packageJson.dependencies,
        }),
    ],
};
module.exports = merge(commonConfig, productionConfig);
