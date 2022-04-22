const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  // entry: ['react-hot-loader/patch', './src/index.js'],
  entry: ["./src/icons.font.js"],
  output: {
    filename: "js/[name].js",
    path: path.join(__dirname, "../dist"), // must be absolute path
    chunkFilename: "js/[name]_[hash:6].js",
    publicPath: "/", // filename prefix path => js/main.js
  },
  devServer: {
    host: "localhost",
    port: 3000,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1024,
              name: "img/[name]_[hash:6].[ext]",
            },
          },
        ],
      },
      {
        test: /\.font\.js$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              importLoaders: 2,
            },
          },
          "postcss-loader",
          {
            loader: "webfonts-loader",
            options: {
              publicPath: "./",
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)?$/,
        include: [path.resolve(__dirname, "font-icons/fonts")],
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "./",
              name: "fonts/[name].[contenthash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
