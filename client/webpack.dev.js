const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "/",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: true,
    moduleIds: "deterministic",
  },
});
