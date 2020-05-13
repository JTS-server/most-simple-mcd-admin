import request from '@/utils/request'

export function getList() {
  return request({
    url: '/most.simple.mcd.Admin/getConfig',
    method: 'GET'
  })
}

export function updateConfig(data) {
  return request({
    url: '/most.simple.mcd.Admin/updateConfig',
    method: 'POST',
    data
  })
}
