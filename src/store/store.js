//1. 引入
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

/**
 * 抽离state -- data
 */
const state = {
  list: [
    { id: 1, name: '吃大桌', done: true },
    { id: 2, name: '走亲戚', done: true },
    { id: 3, name: '吃鸡', done: false }
  ]
}

/**
 * 抽离 mutations -- methods  - 同步
 */
const mutations = {
  // 添加任务
  addTodo(state, payload) {
    // id
    const id =
      state.list.length == 0 ? 1 : state.list[state.list.length - 1].id + 1

    // 添加任务
    state.list.push({
      id,
      name: payload.name,
      done: false
    })
  },
  // 删除任务
  delTodo(state, payload) {
    // 异步
    // setTimeout(() => {
    state.list = state.list.filter(item => item.id != payload.id)
    // }, 0)
  },
  // 修改任务
  updateTodo(state, payload) {
    //1. 根据id 获取对应的任务
    let todo = state.list.find(item => item.id == payload.id)
    //2. 修改任务名称
    todo.name = payload.name
  },
  // 修改 状态
  stateChanged(state, payload) {
    //1. 根据id获取对应的任务
    let todo = state.list.find(item => item.id == payload.id)

    //2. 把任务的状态取反
    todo.done = !todo.done
  }
}

/**
 * 抽离 getters - computed
 */
const getters = {
  // 底部的显示与隐藏
  // 参数1 : state
  isFooterShow(state) {
    return state.list.length > 0
  },
  // 剩余未完成个数
  itemLeftCount(state) {
    return state.list.filter(item => !item.done).length
  },
  // 是否清除完成
  isClearCompltedShow(state) {
    return state.list.some(item => item.done)
  }
}

/**
 * 抽离 actions
 */
const actions = {
  // 异步删除任务
  // 参数1 : context => store
  asyncDelTodo(context, payload) {
    setTimeout(() => {
      console.log('我是异步的春春春')
      // 删除任务
      // 如果你想在actions里面修改状态(数据) ,那么你又错了
      // context.state.list.filter(item => item.id != payload.id)
      context.commit('delTodo', payload)
    }, 0)

    // 情况1 : 如果直接写一个`异步` 直接放里面就可以了
    // 情况2 : 如果你想异步操作,并且赋值(修改状态/数据)
    // axios.get('users').then(res => {
    //     context.commit('getUser',res)
    // })
  }
}

//2. 实例化仓库
const store = new Vuex.Store({
  strict: true,

  // 状态
  state,
  mutations,
  getters,
  actions
})

//3. 导出store
export default store
