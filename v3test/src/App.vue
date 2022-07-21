<template>
  <img alt="Vue logo" height="800" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <!-- <Todos></Todos> -->
  <!-- vue-router4中keep-alive用法 -->
  <router-view v-slot="{Component}">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Todos from './components/todos/Todos.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Todos
  }
}
</script>
