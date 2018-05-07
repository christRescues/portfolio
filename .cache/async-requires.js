// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/home/ryan/dev/portfolio/.cache/dev-404-page.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/home/ryan/dev/portfolio/src/pages/index.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/home/ryan/dev/portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/home/ryan/dev/portfolio/.cache/json/dev-404-page.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/home/ryan/dev/portfolio/.cache/json/index.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/home/ryan/dev/portfolio/.cache/layouts/index.js")
}