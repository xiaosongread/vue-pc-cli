import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = { // 初始化状态值--一定要有该属性对象
  dataSource2: [{
    'name': '张三',
    'work_no': '1012',
    'birthday': '2019-10-02',
    'email': '123@qq.com',
    'gender': '男',
    'achievement': '98'
  }]
}
const mutations = { // 自定义改变state初始值的方法--一定要有该属性对象

}
const getters = { // 状态计算属性--该属性对象不是必须的

}
const actions = { // 异步操作状态--该属性对象不是必须的

}
const modules = { // 状态模块--该属性对象不是必须的

}
const store = new Vuex.Store({
  state,
  mutations,
  // 下面三个非必须
  getters,
  actions,
  modules
})

export default store
