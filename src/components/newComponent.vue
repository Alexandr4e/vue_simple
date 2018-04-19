<template>
  <div class="box">
    <h1>THIS IS NEW COMPONENT</h1>
    <div>{{ msg }}</div>
    <div>{{ newText }}</div>
  </div>
</template>

<script>
  export default {
    name: 'componentName',
    data () {
      return {
        msg: 'FUCK OFF ASSHOLE',
        newText: 'PUTIN',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: red;
  }
  .box {
    background: brown;
  }
</style>
