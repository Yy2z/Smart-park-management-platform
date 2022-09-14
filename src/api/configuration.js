import request from './request.js'

//获取告警规则的接口
export const getArticle = (num) => {
    return request({
      url: '/Alarm/showAlarm',
      method: 'get',
      params:num
    })
  }
// 添加告警规则的接口
export const addArticle = (params) => {
  return request({
    url: '/Alarm/addAlarm',
    method: 'get',
    data: params,
  })
}
//删除告警规则的接口
export const cancelArticle = (num) => {
  return request({
    url: '/Alarm/deleteByAlarmRulesName',
    method: 'get',
    params:num
  })
}
//获取项目管理的接口
export const getProject = (num) => {
  return request({
    url: '/Project/showAllProject',
    method: 'get',
    params:num
  })
}
// 添加项目管理的接口
export const addProject = (params) => {
return request({
  url: '/Project/addProject',
  method: 'get',
  data: params,
})
}
//删除项目管理的接口
export const cancelProject = (num) => {
return request({
  url: '/Project/deleteByProjectNumbers',
  method: 'get',
  params:num
})
}
//删除操作的接口
export const cancelOperationL = (num) => {
return request({
  url: '/deleteOperation',
  method: 'delete',
  params:num
})
}