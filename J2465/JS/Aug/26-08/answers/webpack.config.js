const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "/dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
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
        { from: "src/styles.css", to: "styles.css" }, // Sao chép tất cả tệp CSS từ src/css sang dist/css
      ],
    }),
  ],
  mode: "development",
};
