// 多个可以直接同步更新状态的方法

import { ADD, DELETE, SELECT_ALL, DELETE_FINISHED } from './mutations-type'

export default {
  [ADD] (state, { todo }) {
    state.todos.unshift(todo)
  },
  [DELETE] (state, { index }) {
    state.todos.splice(index, 1)
  },
  [SELECT_ALL] (state, { isCheck }) {
    state.todos.forEach(function (todo) {
      todo.finished = isCheck
    })
  },
  [DELETE_FINISHED] (state) {
    state.todos = state.todos.filter(todo => !todo.finished)
  }
}
