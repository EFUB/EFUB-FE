const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "https://efub-api.attiary.net:443",
      changeOrigin: true,
    })
  );
};
