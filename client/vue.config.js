var path = require("path");

const target = 'http://127.0.0.1:3000';

module.exports = {
  outputDir: path.resolve("../server/public"),
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target,
        changeOrigin: true,
      },
      "/oath2.0": {
        target,
      },
      '^/upload': {
        target,
        changeOrigin: true,
      },
      '^/download': {
        target,
        changeOrigin: true,
      }
    },
  },
};
