// 服务于 state
export default {
  // 任务的总数量
  todosCount (state) {
    return state.todos.length
  },
  // 已经完成的任务数量
  finishedCount (state) {
    return state.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0)
  },
  // 判断是否是全选
  isCheck (getters) {
    return getters.finsihedCount === getters.finishedCount && getters.todosCount > 0
  }
}
