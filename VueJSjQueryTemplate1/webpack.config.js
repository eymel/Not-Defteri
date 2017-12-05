var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: "./scripts/bootstrapper.js",
    output: {
        filename: "scripts/application.js"
    },
    module: {
        rules: [
          {
              test: /\.vue$/,
              loader: "vue-loader"
          },
          {
              test: /\.js$/,
              loader: "babel-loader",
              exclude: /node_modules/
          },
          {
              test: /\.(png|jpg|gif|svg)$/,
              loader: "file-loader",
              options: {
                  name: "[name].[ext]?[hash]"
              }
          }
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.common.js"
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: "#eval-source-map"
};

// Override the webpack configuration with production-specific values when configurable builds are implemented.
//if(thisIsAProductionBuild) {
//  module.exports.plugins = (module.exports.plugins || []).concat([
//      new webpack.DefinePlugin({
//          "process.env": {
//              NODE_ENV: "'production'"
//          }
//      }),
//      new webpack.optimize.UglifyJsPlugin({
//          sourceMap: true,
//          compress: {
//              warnings: false
//          }
//      }),
//      new webpack.LoaderOptionsPlugin({
//          minimize: true
//      })
//  ]);
//}
