<template>
  <div id="todoApp">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/Todo/TodoHeader.vue'
import TodoInput from './components/Todo/TodoInput.vue'
import TodoList from './components/Todo/TodoList.vue'
import TodoFooter from './components/Todo/TodoFooter.vue'

export default {
  name: 'TodoApp',
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