const path = require('path')

module.exports = {
  lintOnSave: false,
  chainWebpack: config =>{
    const dir = path.resolve(__dirname,'src/assets/icons')

    config.module
      .rule('svg-sprite')//文件匹配到正则就用这个规则
      .test(/\.(svg)(\?.*)?$/)
      .include.add(dir).end()//包含icons目录
      .use('svg-sprite-loader-mod').loader('svg-sprite-loader-mod').options({extract:false}).end()
      .use('svgo-loader').loader('svgo-loader')
      .tap(options =>({...options,plugin:[{removeAttrs:{attrs:'fill'}}]}))
      .end()
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'),[{plainSprite:true}])
    config.module.rule('svg').exclude.add(dir)//其他svg loder 排除 icons目录
  }
}
