const path = require("path");
const _ = require("lodash");
const args = require("minimist")(process.argv.slice(2));

const base = require("./base.config");

let srcPath = path.join(__dirname, "./app");

let config = _.merge(base, {
  entry: path.resolve(__dirname, "../src/demo-dom.js"),
  output: {
    path: path.resolve(__dirname, "../src"),
    filename: "demo-dom-bundle.js",
  },
  devServer: {
    port: args.port || 8000,
    inline: true,
  },
  devtool: "source-map",
});

module.exports = config;
