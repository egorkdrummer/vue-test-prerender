/* eslint-disable no-console */
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
//const r = require(__dirname + "/routes");
module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, "dist"),
        routes: ["/", "/portfolio", "/about"]
      })
    ]
  }
};
