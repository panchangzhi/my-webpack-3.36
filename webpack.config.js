// 获取环境命令
const env = process.env.npm_lifecycle_event === 'dev' ? 'dev' : 'prod'  
// 根据环境变量引用相关的配置文件
module.exports = require(`./config/webpack.config.${env}.js`)
