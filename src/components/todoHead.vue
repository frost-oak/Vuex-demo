
<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      placeholder="What needs to be done?"
      autofocus
      @keyup.enter='addTodo'
      v-model='todoName'
    />
  </header>
</template>

<script>

// 第一步 引入
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      todoName: ''
    }
  },
  methods: {

    // 将 vuex>store>mutaions 映射到当前组件内的methods
    // 以后就可以直接把 addTodo 当成我们自己的方法使用
    ...mapMutations(['addTodo']),
    // 起别名
    ...mapMutations({
      addtodo: 'addTodo'
    }),

    addTodo () {
      console.log(this.todoName);

      this.addtodo({
        name: this.todoName
      })

      // this.$store.commit('addTodo', {
      //   name: this.todoName
      // })

      this.todoName = ''
    }
  },
}
</script>

<style>
</style>
