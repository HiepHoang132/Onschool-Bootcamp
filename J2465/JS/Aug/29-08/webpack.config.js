const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Định dạng file SASS
        use: [
          "style-loader", // Thêm CSS vào DOM bằng thẻ <style>
          "css-loader", // Dịch CSS thành CommonJS
          "sass-loader", // Dịch SASS thành CSS
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/images", to: "images" }, // Sao chép tất cả hình ảnh từ src/images sang dist/images
      ],
    }),
  ],
  mode: "development", // Hoặc 'production' tùy thuộc vào môi trường của bạn
};
