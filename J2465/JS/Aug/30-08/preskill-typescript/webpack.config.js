const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.ts", // Đường dẫn tới tệp TypeScript chính của bạn
  output: {
    filename: "bundle.js", // Tên tệp JavaScript được gói gọn
    path: path.resolve(__dirname, "dist"), // Thư mục đầu ra
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"], // Thêm phần mở rộng .ts vào resolve
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Định nghĩa các tệp .ts
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  mode: "development", // Hoặc 'production' tùy theo môi trường
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    open: true,
  },
};
