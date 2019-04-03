/* eslint-disable no-console */
const path = require("path");
const PrerenderSPAPlugin = require("prerender-spa-plugin");
const r = require(__dirname + "/routes");

console.log(r);

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, "dist"),
        // Required - Routes to render.
        //routes: ["/", "/about"]
        // routes: r.reduce((acc, cur) => {
        //   acc.push(cur.path);
        //   return acc;
        // }, [])
        //routes: ["/", "/portfolio", "/about"],
        routes: r
      })
    ]
  }
};
