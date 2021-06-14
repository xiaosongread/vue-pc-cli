import request from '@/utils/request'
import config from '@/config'
//https://admin.shanxiwenbow.com/打包路径http://abcd.shanxiwenbow.com:8080/开发路径
//var host = 'http://abcd.shanxiwenbow.com:8080/'
var host = 'https://admin.shanxiwenbow.com/'
export const urlMap = {
  //一二级导航
  menuDataList: 'wenbo/channel/menuDataList',
   //首页轮播
  pictureCarousel: 'wenbo/channel/pictureCarousel',
  //根据一级id获得对应栏目下的二级置顶数据+最新发布4条数据
  topDataListJson: 'wenbo/channel/topDataChannelId',
  //根据一级id获得对应栏目下的二级推荐数据+最新发布4条数据
  redDataListJson: 'wenbo/channel/redDataChannelId',
  //根据2级栏目id，查出对应的置顶数据+发布时间排序。
  topData: 'wenbo/channel/topData',
  //根据2级栏目id，查出对应的推荐数据+发布时间排序。
  redData: 'wenbo/channel/redData',

  // 根据二级栏目id获取5条最新发布数据
  dataToJsonArticle: 'wenbo/channel/dataToJsonArticle',

  // 详情
  dataarticleData: 'wenbo/channel/articleData',
  // 详情获得栏目
  formArticleIdToChannelData: 'wenbo/channel/formArticleIdToChannelData',


  //列表
  dataToJsonArticlePage: 'wenbo/channel/dataToJsonArticlePage',
  //获取列表页导航
  secondLeveldata: 'wenbo/channel/secondLeveldata',

  //根据2级id获得3级栏目及最新3条数据
  dataToJsonThreeAndArticle: 'wenbo/channel/dataToJsonThreeAndArticle',
  //全局搜索
  globalSearch: 'wenbo/channel/globalSearch',
  //详情页视觉三晋最新8条数据
  sjsjArticleDataList: 'wenbo/channel/sjsjArticleDataList',
}
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = host + urlMap[key]
})

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
export function sjsjArticleDataList(parm) {
  return request({
    url: urlMap['sjsjArticleDataList'],
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
export function globalSearch(parm) {
  return request({
    url: urlMap['globalSearch'],
    method: 'get',
    params: parm || {}
  })
}
