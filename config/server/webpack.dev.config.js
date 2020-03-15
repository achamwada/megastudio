const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = () => {

    return {
        mode: "development",
        entry: {
            server: path.resolve(process.cwd(), "backend/server/index.js")
        },
        output: {
            path: path.resolve(process.cwd(), 'build/server'),
            filename: "[name].js"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: "babel-loader"
                }
            ]
        },
        node: {
            fs: 'empty',
            net: 'empty'
          },
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
}