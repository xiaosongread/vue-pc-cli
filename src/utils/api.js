import request from '@/utils/request'
import config from '@/config'
var host = 'http://abcd.shanxiwenbow.com:8080/'
export const urlMap = {
  // 首页左侧数据
  channelDataListJson: 'wenbo/channel/dataListJson',
 // 二级栏目推荐数据
  dataToJsonArticle: 'wenbo/channel/dataToJsonArticle',
  // 详情
  dataarticleData: 'wenbo/channel/articleData',
  //列表
  dataToJsonArticlePage: 'wenbo/channel/dataToJsonArticlePage',
  //首页轮播
  pictureCarousel: 'wenbo/channel/pictureCarousel',
}
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = host + urlMap[key]
})

export function channelDataListJson (parm) {
  return request({
    url: urlMap['channelDataListJson'],
    method: 'get',
    params: parm || {}
  })
}
export function dataToJsonArticle (parm) {
  return request({
    url: urlMap['dataToJsonArticle'],
    method: 'get',
    params: parm || {}
  })
}
export function articleData (parm) {
  return request({
    url: urlMap['dataarticleData'],
    method: 'get',
    params: parm || {}
  })
}
export function pictureCarousel (parm) {
  return request({
    url: urlMap['pictureCarousel'],
    method: 'get',
    params: parm || {}
  })
}
export function getDouBanMovieList (parm) {
  return request({
    url: urlMap['dataToJsonArticlePage'],
    method: 'get',
    params: parm || {}
  })
}
