<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- 传统写法 -->
  <p @click="$store.commit('add')">{{$store.state.count}}</p>
  <!-- composition api 写法 -->
  <p @click="add">{{count}}</p>
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
import { toRefs } from "vue";
import { useStore } from "vuex";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Todos
  },
  setup(){
    const store = useStore()
    console.log(store);
    return{
      ...toRefs(store.state),
      add: ()=>{
        store.commit('add')
      }
    }
  }
}
</script>
