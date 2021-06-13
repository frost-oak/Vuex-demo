/**
 * https://douban.uieee.com/v2/movie/in_theaters
 */
module.exports = {
  // webpack-dev-server   =>  devServer
  // proxy 劫持 ~~  DefineProperty
  //  3.X             vue2.X

  devServer: {
    proxy: {
      '/myapi': {
        //  https://douban.uieee.com/v2/movie/in_theaters
        target: 'https://douban.uieee.com/v2/',
        pathRewrite: { '^/myapi': '' },

        // 设置https
        secure: false,
        // 必须设置该项
        changeOrigin: true
      }
    }
  }
}
