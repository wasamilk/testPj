<template>
  <div class="inputBox">
    <input type="text" v-model="newTodoItem" placeholder="input text - ☆" v-on:keyup.enter="addTodo">

    <!-- <span class="addContainer"> -->
    <span>
      <button class="addBtn" v-on:click="addTodo"> + </button>
    </span>
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
        //localStorage.setItem(value, value);
        //alert( "save-☆" );
        this.$emit('addTodo', value);
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
  input:focus {
    online: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: blue;
    vertical-align: middle;
  }
</style>