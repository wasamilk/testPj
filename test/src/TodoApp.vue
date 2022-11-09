<template>
  <div id="todoApp">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:deleteTodo="deleteTodo"></TodoList>
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/Todo/TodoHeader.vue'
import TodoInput from './components/Todo/TodoInput.vue'
import TodoList from './components/Todo/TodoList.vue'
import TodoFooter from './components/Todo/TodoFooter.vue'

export default {
  name: 'TodoApp',
  data() {
    return {
      todoItems: []
    }
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
    },
    clearAll() {
      console.log('length B: ' + localStorage.length);
      localStorage.clear();
      console.log('length A: ' + localStorage.length);
      this.todoItems = [];
    },
    deleteTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  components:{
    'TodoHeader':TodoHeader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'TodoFooter':TodoFooter
  }
}
</script>

<style>
  /*body {*/
  #todoApp {
    text-align: center;
    background-color: #F6F6F8;
  }
  input{
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>