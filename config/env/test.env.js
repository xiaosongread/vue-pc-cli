'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./default.env')

module.exports = merge(prodEnv, {
  // 每个环境不同的配置可以在这里配置
  CURRENT_ENV: "'TEST环境'"
})
