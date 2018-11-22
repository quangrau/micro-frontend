module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname + "/public",
    publicPath: "http://localhost:8080/public/",
    filename: "bundle.js",
    libraryTarget: "amd"
  },
  module: {
    rules: [
      {
        test: /(?!test)\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader!sass-loader"
      }
    ]
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "react-router": "react-router",
    classnames: "classnames"
  }
};
