const path = require("path");

module.exports = {
  devtool: "source-map",
  entry: "./src/bss.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bss.js",
    library: "basicScriptSet",
    libraryTarget: "var"
  },
  externals: {
    $: "jQuery",
    jquery: "jQuery"
  }
};
