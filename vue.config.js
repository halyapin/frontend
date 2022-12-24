/*module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'http://127.0.0.1:8000/'
  }
}*/


module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
}