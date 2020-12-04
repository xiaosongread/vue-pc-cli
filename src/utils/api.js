import request from '@/utils/request'
import config from '@/config'
export const urlMap = {
  // 获取所有码表信息
  getDict: 'api/dict',
  getCategory: 'api/category',
  getRoomList: 'api/room/list',
  getRoomInfo: 'api/room/info',
  getAgentList: 'api/agent/list',
  getAgentInfo: 'api/agent/info',
}
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = config.BASE_API + urlMap[key]
})

export function getDict () {
  return request({
    url: urlMap['getDict'],
    method: 'get'
  })
}
export function getCategory () {
  return request({
    url: urlMap['getCategory'],
    method: 'get'
  })
}
export function getRoomList () {
  return request({
    url: urlMap['getRoomList'],
    method: 'get'
  })
}
export function getRoomInfo (id) {
  return request({
    url: urlMap['getRoomInfo'],
    method: 'get',
    params: {
      id: id
    }
  })
}
export function getAgentList () {
  return request({
    url: urlMap['getAgentList'],
    method: 'get'
  })
}
export function getAgentInfo (id) {
  return request({
    url: urlMap['getAgentInfo'],
    method: 'get',
    params: {
      id: id
    }
  })
}