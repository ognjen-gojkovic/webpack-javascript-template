const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  output: {
    filename: "./assets/js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    port: 5000,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: false,
      },
    }),
    new MiniCssExtractPlugin({
      filename: "./assets/css/[name].css",
    }),
  ],
});
