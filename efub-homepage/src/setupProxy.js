const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://13.125.136.136:8080",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware('/pages', {
      target: "https://api.notion.com/v1",
      changeOrigin: true,
    })
  )
};
