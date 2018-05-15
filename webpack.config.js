const path = require("path");

module.exports = {
  entry: "./src/bss.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js"
  }
};
