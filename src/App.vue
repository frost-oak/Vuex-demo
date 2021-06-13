<template>
  <!-- 感觉这里这个id=app多余了，有点让人混淆，容易误导，真正的id=app的div应该在html上 -->
  <div id="app">
    <section class="todoapp">
      <!-- 头部 -->
      <todoHead></todoHead>

      <!-- 列表部分 -->
      <todoList></todoList>

      <!-- 底部 -->
      <todoFooter></todoFooter>

    </section>
  </div>
</template>

<script>
// 引入组件
import todoHead from './components/todoHead.vue'
import todoList from './components/todoList.vue'
import todoFooter from './components/todoFooter.vue'


export default {
  name: 'app',
  components: {
    todoHead, todoList, todoFooter
  }
}
</script>

<style>
</style>
