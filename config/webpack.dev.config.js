const path = require('path')
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const  HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = () => {

    return {
        mode: "development",
        entry: {
            client: path.resolve(process.cwd(), "client/index.js")
        },
        /*output: {
            path: path.resolve(process.cwd(), "build"),
            filename: "[name]-bundle-[contenthash].js"
        },*/
        watch: true,
        devServer:{
            before: (app, server, compiler) => {
                app.get('/api', (req, res) => {
                    console.log('testing...')
                    res.json({
                        status: "UP"
                    })
                })
            },
          contentBase: path.resolve(process.cwd(), 'build'),
          port: 8080,
          open: true,
          hot: true
        },
        module: {
            rules: [
                {
                    test: /.jsx?$/,
                    use: "babel-loader"
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "utils/template.html")
            }),
            new CleanWebpackPlugin()
        ]
    }
}