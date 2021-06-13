
<template>
  <footer
    class="footer"
    v-show='isFooterShow'
  >
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ itemLeftCount }}</strong> item left</span>

    <!-- Hidden if no completed items are left ↓ -->
    <button
      v-show='isClearCompltedShow'
      class="clear-completed"
    >Clear completed</button>
  </footer>
</template>

<script>
// 第一步 : 引入  mapGetters
import { mapGetters } from 'vuex'
export default {
  computed: {
    // 将store下面的isFooterShow 映射当前组件里的计算属性 isFooterShow
    //  isFooterShow =  $store.getters.isFooterShow
    // 以后 :就可以直接 isFooterShow
    ...mapGetters(['isFooterShow', 'itemLeftCount', 'isClearCompltedShow'])
  }
}
</script>

<style>
</style>
