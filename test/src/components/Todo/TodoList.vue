<template>
  <section>
    <ul>
      <!-- <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem"> -->
      <li v-for="(todoItem, index) in propsdata" v-bind:key="todoItem">
        {{ todoItem }}
        <button class="delBtn" @click="deleteTodo(todoItem, index)"> - </button>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "TodoList",
  props:['propsdata'],
  /*
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  */
  methods: {
    deleteTodo(todoItem, index) {
      this.$emit('deleteTodo', todoItem, index);
    }
  }
}
</script>

<style scoped>
  li{
    display: flex;
    background: white;
    margin: 0.5rem 0;
    min-height: 25px;
  }
  .delBtn {
    margin-left: auto;
    color: red;
  }
</style>