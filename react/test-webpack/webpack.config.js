module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  devServer: {
    contenBase: "./public",
    inline: true,
    historyApiFallback: true
  },
  module: {
    rules: [
      { 
        test: /(\.js|\.jsx)$/,
        use: { 
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }, 
        exclude: /node_modules/ 
      }, {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }, {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },

}