const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    output: {
        publicPath: 'http://52.72.125.181/',
    },
    devServer: {
        port: 3000,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
		    marketing: 'marketing@http://34.229.159.146/remoteEntry.js',
                nextjsapp: 'nextjsapp@http://3.82.35.101/remoteEntry.js',
            },
            shared: packageJson.dependencies,
            //shared: ['react', 'react-dom'],
        }),       
    ],
};

module.exports = merge(commonConfig, devConfig);
