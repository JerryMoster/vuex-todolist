<template>
  <div class="app">
    <div class="todo-footer">
      <label for="">
        <input type="checkbox" v-model="selectedAllOrNot" />
      </label>
      <span>
        <span>已完成{{finishedCount}}件</span>/ 总计{{todosCount}}件
      </span>
      <button class="btn btn-waring" @click="deleteFinishedTodo">清除已完成的任务</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  computed: {
    ...mapGetters(['todosCount', 'finishedCount', 'isCheck']),
    selectedAllOrNot: {
      get () {
        // 决定是否勾选
        return this.isCheck
      },
      set (value) {
        this.selectedAllTodo(value)
      }
    }

  },
  watch: {

  },
  methods: {
    ...mapActions(['selectedAllTodo', 'deleteFinishedTodo'])
  },
  components: {

  }
}
</script>

<style lang="" scoped>
</style>
