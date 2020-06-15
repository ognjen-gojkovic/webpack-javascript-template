const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/assets/js/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              minimize: true,
              // modules: false,
              modules: {
                localIdentName: "[local]__[hash:base64:5]",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "./assets/img[name].[ext]",
              outputPath: "",
              // we need to edit manually public path because by default returns wierd path
              // public path is property that in dist folder in css file edit url() path to files
              publicPath: function (url) {
                return url.replace("assets", "..");
              },
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: "./src/assets/img",
        to: "./assets/img/[name].[ext]",
      },
    ]),
  ],
};
