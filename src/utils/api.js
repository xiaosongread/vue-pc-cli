import request from '@/utils/request'
import config from '@/config'
export const urlMap = {
  // 获取所有码表信息
  getAllDict: '/data/dict/all'

}
// 批量增加url前缀
Object.keys(urlMap).forEach(key => {
  urlMap[key] = config.BASE_API + urlMap[key]
})

export function getAllDict (parm) {
  return request({
    url: urlMap['getAllDict'],
    method: 'get',
    params: parm || {}
  })
}
