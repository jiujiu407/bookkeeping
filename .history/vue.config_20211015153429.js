const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(_dirname,'src/assets/icons')

    config.module
      .rule('svg-sprite')
      .test(/\.(svg)(\?.*)?$/)
      .include.add(dir).end()
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract:false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options =>({...options,plugin:[{removeAttrs:{attrs:'fill'}}]}))
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader-mod/plugin'),({}))

  }
}
