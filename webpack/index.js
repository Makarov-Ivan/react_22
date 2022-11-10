const { merge } = require('webpack-merge')
const buildType = process.env.BUILD_TYPE

if (!['dev', 'prod'].includes(buildType)) {
  throw new Error('invalid build type\nchoose one of [\'dev\', \'prod\']')
}

const buildConfig = require(`./${buildType}.js`)
const commonConfig = require('./common.js')

module.exports = merge(commonConfig, buildConfig)
