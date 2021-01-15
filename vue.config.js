const path = require('path')
const pxtovw = require('postcss-px-to-viewport')

function resolve(dir) {
  return path.join(__dirname, dir)
}

// 配置文件路径的别名----重新设置就需要重新启动一下项目
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue_shop/' : '/',

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
  },

  // 配置sass全局变量
  css: {
    extract: { ignoreOrder: true },
    loaderOptions: {
      sass: {
        prependData: `@import "~assets/css/var.scss";`
      },
      postcss: {
        //给postcss-loader传递选项
        plugins: [
          new pxtovw({
            unitToConvert: 'px', //需要转换的单位，默认为"px"；
            viewportWidth: 375, //设计稿的视口宽度
            unitPrecision: 5, //单位转换后保留的小数位数
            propList: ['*'], //要进行转换的属性列表,*表示匹配所有,!表示不转换
            viewportUnit: 'vw', //转换后的视口单位
            fontViewportUnit: 'vw', //转换后字体使用的视口单位
            selectorBlackList: [], //不进行转换的css选择器，继续使用原有单位
            minPixelValue: 1, //设置最小的转换数值
            mediaQuery: false, //设置媒体查询里的单位是否需要转换单位
            replace: true, //是否直接更换属性值，而不添加备用属性
            exclude: [/node_modules/] //忽略某些文件夹下的文件
          })
        ]
      }
    }
  }
}
