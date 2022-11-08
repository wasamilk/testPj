<template>

  <div>
    <h3>test -> Test.vue</h3>
      {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'TestVue',
  /*
  data(){
    return{
      msg:'testMsg'
    }
  }
  */
  data: function() {
    return {
      msg:'test data?'
    }
  }
}
</script>

<style scoped>

</style>