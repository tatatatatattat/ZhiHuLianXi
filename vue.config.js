module.exports = {
    configureWebpack:{
        resolve:{
            alias:{
                'network':'@/network',
                'assets':'@/assets',
                'router':'@/router',
                'components':'@/components',
                'views':'@/views',
                
            }
        }
    },
    devServer: {
        proxy: {
          "/api": {
            target: "http://yapi.weilaigongzuo.com",
            ws: true,
            changeOrigin: true
          }
        }
      },
      publicPath: process.env.NODE_ENV === "production" ? "/zhihuwebs" : "/"
}