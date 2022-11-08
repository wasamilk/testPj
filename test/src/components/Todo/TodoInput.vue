<template>
  <div>
    <input type="text" v-model="newTodoItem">
    <button v-on:click="addTodo"> + </button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem:'input text - ☆'
    }
  },
  methods: {
    addTodo() {
      //console.log(this.newTodoItem);
      localStorage.setItem(this.newTodoItem, this.newTodoItem);
    }
  }
}
</script>

<style scoped>

</style>