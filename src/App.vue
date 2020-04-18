<template>
  <div class="todo-contaiiner">
    <h2>vuex 改造</h2>
    <div class="todo-wrap">
      <Head/>
      <List/>
      <Foot/>
    </div>
  </div>
</template>

<script>
import Head from './components/Head'
import List from './components/List'
import Foot from './components/Foot.vue'

export default {
  name: 'App',
  components: {
    Head,
    List,
    Foot
  }
  // watch: {
  //   // 深度监事
  //   todos: {
  //     handler: localStorageUtils.saveTodos(),
  //     deep: true, // 深层次的监视
  //     immediate: true // 已经来就触发回调函数 handler
  //   }
  // }
}
</script>

<style scoped>
</style>
