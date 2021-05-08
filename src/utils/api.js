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
    // 详情获得栏目
    formArticleIdToChannelData: 'wenbo/channel/formArticleIdToChannelData',
  //列表
  dataToJsonArticlePage: 'wenbo/channel/dataToJsonArticlePage',
  secondLeveldata: 'wenbo/channel/secondLeveldata',
  //首页轮播
  pictureCarousel: 'wenbo/channel/pictureCarousel',
  //一二级导航
  menuDataList: 'wenbo/channel/menuDataList',
  //根据一级id获得置顶数据
  topDataListJson: 'wenbo/channel/topDataChannelId',
  //根据一级id获得推荐数据
  redDataListJson: 'wenbo/channel/redDataChannelId',
  //根据2级id获得3级及最新3条数据
  dataToJsonThreeAndArticle: 'wenbo/channel/dataToJsonThreeAndArticle',
}
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = host + urlMap[key]
})

export function channelDataListJson(parm) {
  return request({
    url: urlMap['channelDataListJson'],
    method: 'get',
    params: parm || {}
  })
}
export function formArticleIdToChannelData(parm) {
  return request({
    url: urlMap['formArticleIdToChannelData'],
    method: 'get',
    params: parm || {}
  })
}
export function dataToJsonThreeAndArticle(parm) {
  return request({
    url: urlMap['dataToJsonThreeAndArticle'],
    method: 'get',
    params: parm || {}
  })
}
export function redDataListJson(parm) {
  return request({
    url: urlMap['redDataListJson'],
    method: 'get',
    params: parm || {}
  })
}
export function topDataListJson(parm) {
  return request({
    url: urlMap['topDataListJson'],
    method: 'get',
    params: parm || {}
  })
}
export function dataToJsonArticle(parm) {
  return request({
    url: urlMap['dataToJsonArticle'],
    method: 'get',
    params: parm || {}
  })
}
export function articleData(parm) {
  return request({
    url: urlMap['dataarticleData'],
    method: 'get',
    params: parm || {}
  })
}
export function pictureCarousel(parm) {
  return request({
    url: urlMap['pictureCarousel'],
    method: 'get',
    params: parm || {}
  })
}
export function dataToJsonArticlePage(parm) {
  return request({
    url: urlMap['dataToJsonArticlePage'],
    method: 'get',
    params: parm || {}
  })
}
export function secondLeveldata(parm) {
  return request({
    url: urlMap['secondLeveldata'],
    method: 'get',
    params: parm || {}
  })
}
export function menuDataList() {
  return request({
    url: urlMap['menuDataList'],
    method: 'get',
  })
}