<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <div>
      <componentName></componentName>
    </div>
    <div>
      <block></block>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import componentName from './components/newComponent.vue'
import block from './components/block/block.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    componentName,
    block
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
