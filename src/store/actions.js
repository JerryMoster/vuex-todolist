// 包含多个间接更新 state 的方法，就是异步请求数据

import { ADD, DELETE, SELECT_ALL, DELETE_FINISHED } from './mutations-type'

export default {
  addTodo ({ commit }, todo) {
    commit(ADD, { todo })
  },
  deleteTodo ({ commit }, index) {
    commit(DELETE, { index })
  },
  selectedAllTodo ({ commit }, isCheck) {
    commit(SELECT_ALL, { isCheck })
  },
  deleteFinishedTodo ({ commit }) {
    commit(DELETE_FINISHED)
  }
}
