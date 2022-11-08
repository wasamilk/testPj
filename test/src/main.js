import Vue from 'vue'
import App from './App.vue'
import TodoApp from './TodoApp.vue'

Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(TodoApp),
}).$mount('#todoApp')

