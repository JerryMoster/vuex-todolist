<template>
  <div>
    <ul class="todo-main">
      <Item v-for="(todo,index) in todos" :key="index" :index="index" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import localStorageUtils from './../utils/localStorageUtils'
import Item from './Item'
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['todos'])
  },
  components: {
    Item
  },
  watch: {
    todos: {
      deep: true,
      handler: localStorageUtils.saveTodos
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
