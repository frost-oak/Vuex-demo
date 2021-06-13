
import { log } from 'util';
<template>
  <section class="main">
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
    />
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{ completed : item.done , editing : item.id  == editId  }"
        v-for='item in $store.state.list'
        :key='item.id'
      >
        <!-- v-model='item.done' -->
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked='item.done'
            @input='stateChanged(item.id)'
          />
          <label @dblclick="showEdit(item.id)">{{ item.name }}</label>
          <button
            @click='delTodo(item.id)'
            class="destroy"
          ></button>
        </div>
        <input
          class="edit"
          @keyup.enter='hideEdit'
          :value='item.name'
        />
        <!-- 
           :value='item.name'  @input='val => item.name =val'
           :value='item.name'  @input='e => item.name = e'
           :value='item.name'  @input='item.name = $event'
         -->
      </li>
    </ul>
  </section>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      editId: -1
    }
  },
  methods: {
    // 省略this.$store.commit(xxx)用
    ...mapMutations(['updateTodo', 'stateChanged']),
    //起别名，大写改小写用
    ...mapMutations({
      statechanged: 'stateChanged'
    }),
    // 省略this.$store.dispatch('asyncDelTodo', { id })
    ...mapActions(['asyncDelTodo']),

    delTodo (id) {

      // 同步 commit => mutaions =>  delTodo
      // this.$store.commit('delTodo', {
      //   id
      // })
      // 异步  dispatch => actions => asyncDelTodo
      // this.$store.dispatch('asyncDelTodo', { id }) 这踏马不是react一样了嘛
      this.asyncDelTodo({ id })
    },
    showEdit (id) {
      this.editId = id
    },
    hideEdit (e) {

      // 收集数据, 把值传递给 vuex ,让vuex去修改
      // id   :  this.editId
      // input值  e.target.value
      this.updateTodo({
        id: this.editId,
        name: e.target.value
      })
      // this.$store.commit('updateTodo', {
      // id: this.editId,
      // name: e.target.value
      // })

      this.editId = -1
    },
    // 状态改变
    stateChanged (id) {
      console.log(id);

      this.statechanged({ id })
      // this.$store.commit('stateChanged', { id })

    }
  },
}
</script>

<style>
</style>
