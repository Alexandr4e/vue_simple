<template>
  <div class="box">
    <h1>THIS IS NEW COMPONENT</h1>
    <div>{{ msg }}</div>
    <div>{{ newText }}</div>
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'componentName',
    data () {
      return {
        msg: 'FUCK OFF ASSHOLE',
        newText: 'PUTIN',
        todos: [
            { text: 'Изучить JavaScript' },
            { text: 'Изучить Vue' },
            { text: 'Создать что-нибудь классное' }
        ]
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
