<template>
  <div>
    <input type="text" v-model="newTodoItem" placeholder="input text - ☆" v-on:keyup.enter="addTodo">

    <button v-on:click="addTodo"> + </button>
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  data() {
    return {
      newTodoItem:''
    }
  },
  methods: {
    addTodo() {
      //console.log(this.newTodoItem);
        /*
        if(this.newTodoItem !==""){
          var value = this.newTodoItem && this.newTodoItem.trim();
          localStorage.setItem(value, value);
          this.clearInput();
        }
        */
      var value = this.newTodoItem && this.newTodoItem.trim();
      if(value !=="") {
        localStorage.setItem(value, value);
        alert( "save-☆" );
        this.clearInput();
      } else {
        alert( "empty!");
      }
    },
    clearInput(){
      this.newTodoItem = '';
    }
  }
}
</script>

<style scoped>

</style>