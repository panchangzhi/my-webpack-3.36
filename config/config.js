/**
 * 
 */
const glob = require('glob')
const path = require('path')

module.exports = {
  // 所有html页面的引用，模版
  HTMLDirs: searchFileHtml(),
  // 图片文件夹所在位置
  cssPublicPath: '../',
  // 图片打包生成位置
  imgOutputPath: 'img/',
  // 抽取css制定抽取的目录
  cssOutputPath: './css/[name]-[hash].css',
  // 项目根目录
  devServerOutputPath: '../dist'
}

// 获取 src／html 文件下所有的html
function searchFileHtml () {
  let files = glob.sync('src/html/*.html')
  let HTMLFiles = []
  files.forEach(file =>{
    HTMLFiles.push(path.basename(file, '.html'))
  })
  return HTMLFiles
}

