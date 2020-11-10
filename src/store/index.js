import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const state = { // 初始化状态值--一定要有该属性对象
  scrollHeaderBarFlag: false,
  scrollConsBarFlag: false,
  subBarActive: 'xmld',
  loginFlag: false,
  isLogin: true,
  yykfFlag: false,
  // dataSource2: [{
  //   'name': '张三',
  //   'work_no': '1012',
  //   'birthday': '2019-10-02',
  //   'email': '123@qq.com',
  //   'gender': '男',
  //   'achievement': '98'
  // }],
  // appConut: 0,
  // changeNum: 0,
  // actionDes: '还没有发送请求'
}
const mutations = { // 自定义改变state初始值的方法--一定要有该属性对象
  SET_HEADER_BAR: (state, val) => {
    state.scrollHeaderBarFlag = val
  },
  SET_CONS_BAR: (state, val) => {
    state.scrollConsBarFlag = val
  },
  SET_SUB_BAR_ACTIVE: (state, val) => {
    state.subBarActive = val
  },
  SET_LOGIN_FLAG: (state, val) => {
    state.loginFlag = val
  },
  SET_IS_LOGIN: (state, val) => {
    state.isLogin = val
  },
  SET_YYKF_FLAG: (state, val) => {
    state.yykfFlag = val
  }
  // ADD_COUNT: (state, n) => {
  //   state.appConut += n
  // },
  // DELETE_COUNT: (state, n) => {
  //   state.appConut -= n
  // },
  // RESET_APP_COUNT: (state, mes) => {
  //   console.log('执行了', mes)
  //   state.actionDes = mes
  // }
}
const getters = { // 状态计算属性--该属性对象不是必须的
  // watchAppConut: state => {
  //   return state.appConut + 100
  // }
}
const actions = { // 异步操作状态--该属性对象不是必须的
  /* eslint-disable */
  TOGGLE_HEADER_BAR({
    commit
  }, boolen) {
    commit('SET_HEADER_BAR', boolen)
  },
  /* eslint-disable */
  TOGGLE_CONS_BAR({
    commit
  }, boolen) {
    commit('SET_CONS_BAR', boolen)
  },
  /* eslint-disable */
  TOGGLE_SUB_BAR_ACTIVE({
    commit
  }, boolen) {
    commit('SET_SUB_BAR_ACTIVE', boolen)
  },
  TOGGLE_LOGIN_FLAG({
    commit
  }, boolen) {
    commit('SET_LOGIN_FLAG', boolen)
  },
  TOGGLE_IS_LOGIN({
    commit
  }, boolen) {
    commit('SET_IS_LOGIN', boolen)
  }
  // RESET_ACCTION_APP_COUNT: ({ commit }, mes) => {
  //   commit('RESET_APP_COUNT', mes)
  // }
}
const modules = { // 状态模块--该属性对象不是必须的(可以让每一个模块拥有自己的state、mutation、action、getters,使得结构非常清晰，方便管理)

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
