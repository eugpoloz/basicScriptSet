const path = require("path");

module.exports = {
  entry: "./src/bss.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          },
          { loader: "exports-loader" }
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "bundle.js",
    library: "basicScriptSet",
    libraryTarget: "var"
  },
  externals: {
    $: "jQuery",
    jquery: "jQuery"
  }
};
