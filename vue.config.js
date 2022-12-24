/*module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      'http://localhost:8080': {
          target:'https://server-qimw.onrender.com'
      }
  }
}
}*/
//const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: 'https://server-qimw.onrender.com'
  },
  configureWebpack: {
    devtool: 'source-map',
  },
}
/*module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: {
    proxy: 'https://server-qimw.onrender.com'
  }
}*/
