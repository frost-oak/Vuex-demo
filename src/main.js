import Vue from 'vue'
import App from './App.vue'

import store from './store/store.js'

// 引入css
import './assets/base.css'
import './assets/index.css'

Vue.config.productionTip = false
// 也就是说，createElement 函数是用来生成 HTML DOM 元素的，而上文中的 Hyperscript也是用来创建HTML结构的脚本，这样作者才把 createElement 简写成 h。

// 而 createElement(也就是h)是vuejs里的一个函数。这个函数的作用就是生成一个 VNode节点，render 函数得到这个 VNode 节点之后，返回给 Vue.js 的 mount 函数，渲染成真实 DOM 节点，并挂载到根节点上。
new Vue({
  store,
  render: h => h(App)
  // 等于components: { App },template: '<App/>'的结合体
  // 归根结底，App或者说App.vue只是一个最后需要挂载到html上的组件罢了
}).$mount('#app')
// render: function (createElement) {
//   return createElement(App);
// }

// new Vue({
//   router,
//   el: '#app',
//   components: { App },
//   template: '<App/>'
// })
// ```App.vue中
// export default {
//   name: 'app',
//   components: {
//     todoHead, todoList, todoFooter
//   }
// }
// ```

// 反向代理
import axios from 'axios'
//  https://douban.uieee.com/v2/movie/in_theaters
axios.get('/myapi/movie/in_theaters').then(res => {
  console.log(res)
})
