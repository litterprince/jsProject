const path = require('path');

module.exports = {
    entry: './src/lib/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        library: "toastDemo",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader: "vue-loader",
                exclude: /node_modules/,
                options: {
                    loaders: {
                        less: 'vue-style-loader!css-loader!less-loader', // <style lang="less">
                    }
                }
            }
        ]
    }
};
