<template>
  <div>
    <li @mouseenter="dealShow(true)" @mouseleave="dealShow(false)" :style="{background:bgColor}">
      <label for="">
        <input type="checkbox" v-model="todo.finished" />
        <span>{{todo.title}}</span>
      </label>
      <button v-show="isShowDelButton" class="btn btn-waring" @click="DeleteItem()">删除</button>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object,
    index: Number
  },
  data () {
    return {
      isShowDelButton: false,
      bgColor: '#fff'
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
    // 控制鼠标移入和移出，删除按钮的显示隐藏
    dealShow (isShow) {
      this.isShowDelButton = isShow
      // 控制背景颜色
      this.bgColor = isShow ? '#ccc' : '#fff'
    },
    // 删除事件
    DeleteItem () {
      if (window.confirm(`确定删除${this.todo.title}吗？`)) {
        this.$store.dispatch('deleteTodo', this.index)
      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
li {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: left;
  border: 1px solid #ccc;
}

label {
  margin-right: 10px;
}

button {
  float: right;
  width: 60px;
  height: 30px;
  margin-top: 5px;
  margin-right: 10px;
  border: none;
}
</style>
