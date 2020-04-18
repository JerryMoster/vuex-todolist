const Data = 'data'
export default {
  readTodos () {
    if (Data !== '') {
      return JSON.parse(localStorage.getItem(Data) || '[]')
    }
  },
  saveTodos (todos) {
    localStorage.setItem(Data, JSON.stringify(todos))
  }
}
