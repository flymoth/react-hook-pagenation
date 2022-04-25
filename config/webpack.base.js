module.exports = {
    module: {
        rules: [
            {
                // 编译处理 js 和 jsx 文件
                test: /\.(js|jsx)$/,
                use: [
                    { loader: 'babel-loader' }
                ],
                exclude: /node_modules/
            }
        ]
    },
};
