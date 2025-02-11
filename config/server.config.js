module.exports = {
  serverPort: 3100, // 服务器端口号
  useProxy: false, // 线上环境是否启用Proxy代理
  proxyTable: {
    // dev 地址
    '/devapi': {
      // mock 地址
      target: 'https://admin.shanxiwenbow.com',
      changeOrigin: true,
      pathRewrite: { '^/devapi': '' }
    }
  }
}
