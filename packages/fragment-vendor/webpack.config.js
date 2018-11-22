module.exports = {
  entry: "./vendor.js",
  output: {
    path: __dirname + "/public",
    publicPath: "http://localhost:8081/public/",
    filename: "bundle.js",
    libraryTarget: "umd"
  }
};
