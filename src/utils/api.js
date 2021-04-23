import request from '@/utils/request'
import config from '@/config'
var host = 'http://abcd.shanxiwenbow.com:8080/'
export const urlMap = {
  // 首页左侧数据
  channelDataListJson: 'wenbo/channel/dataListJson'

}
const apiGetDouBanMovieList = 'https://douban.uieee.com/v2/movie/in_theaters_1'
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

export function getDouBanMovieList (parm) {
  return request({
    url: apiGetDouBanMovieList,
    method: 'get',
    params: {
      start: 0,
      count: 10
    }
  })
}
