const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(_dirname,'src/assets/icons')

    config.module
      .rule()

  }
}
