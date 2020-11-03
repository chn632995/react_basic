const { createProxyMiddleware: proxy } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/api",
        proxy({
            target: "https://api.i-lynn.cn/",
            changeOrigin: true,
            pathRewrite: {
                "^/api": "",
            },
        })
    );
};
