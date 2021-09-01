module.exports = {
  devServer: {
    host: "127.0.0.1",
    port: 80, // 端口号
    https: false,
    open: true, //配置自动启动浏览器
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',//跨域地址
        changeOrigin: true,//是否跨域
        secure: false,//是否使用https
        pathRewrite: {
          '^/api': ''//这里要理解成用'/api'代替target里面的地址，后面的组件中我们调用接口的时候直接用api代替，比如我要调用'http://40.00.100:3002/user/add'，直接写成'/api/user/add'即可
        }
      }
    }
  },
};
