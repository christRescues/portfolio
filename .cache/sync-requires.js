// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/home/ryan/dev/portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/ryan/dev/portfolio/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/ryan/dev/portfolio/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/home/ryan/dev/portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/home/ryan/dev/portfolio/.cache/json/dev-404-page.json"),
  "index.json": require("/home/ryan/dev/portfolio/.cache/json/index.json")
}