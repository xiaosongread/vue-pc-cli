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
  dataToJsonArticlePage: 'wenbo/channel/dataToJsonArticlePage',
  secondLeveldata: 'wenbo/channel/secondLeveldata',
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
export function dataToJsonArticlePage (parm) {
  return request({
    url: urlMap['dataToJsonArticlePage'],
    method: 'get',
    params: parm || {}
  })
}
export function secondLeveldata (parm) {
  return request({
    url: urlMap['secondLeveldata'],
    method: 'get',
    params: parm || {}
  })
}

