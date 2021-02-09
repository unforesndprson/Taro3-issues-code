const path = require('path')
function resolve(url) {
  return path.resolve(__dirname, '..', url)
}
const config = {
  projectName: 'Taro3-issues-code',
  date: '2020-12-24',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,//实现多端同步调试
  plugins: [],
  defineConstants: {
    __MY__: JSON.stringify('my')
  },
  copy: {
    patterns: [
     
    ],
    options: {
    }
  },
  framework: 'vue3',
  alias: {
    '@/assets': resolve('src/assets'),
    '@/components': resolve('src/components'),
    '@/constants': resolve('src/constants'),
    '@/styles': resolve('src/styles'),
    '@/utils': resolve('src/utils'),
  },
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
       
        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
