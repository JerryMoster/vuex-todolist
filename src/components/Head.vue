<template>
  <div>
    <div class="todo-header">
      <input type="text" placeholder="请输入今天的任务清单，按回车键确认" v-model="title" @keyup.enter="addItem" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    addTodo: Function
  },
  data () {
    return {
      title: ''
    }
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    addItem () {
      // 1.判断内容是否为空
      const title = this.title.trim()
      if (!title) {
        alert('输入的内容不能为空！')
        return
      }
      // 2.生成一个TODO 对象
      const todo = { title, finsihed: false }
      // 3.调用父组件中的事件
      this.$store.dispatch('addTodo', todo)
      // 4.清空输入框的内容
      this.title = ''
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
</style>
