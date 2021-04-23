import request from '@/utils/request'
import config from '@/config'
export const urlMap = {
  // 首页左侧数据
  getAllDict: 'http://abcd.shanxiwenbow.com:8080/wenbo/channel/dataListJson'

}
// http://abcd.shanxiwenbow.com:8080/wenbo/channel/dataListJson
const apiGetDouBanMovieList = 'https://douban.uieee.com/v2/movie/in_theaters_1'
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = urlMap[key]
})

export function getAllDict (parm) {
  return request({
    url: urlMap['getAllDict'],
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
