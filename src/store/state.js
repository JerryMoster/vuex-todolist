// 状态对象模块
// 引入工具类
import localStorageUtils from './../utils/localStorageUtils.js'

export default {
  todos: localStorageUtils.readTodos()
}
