<template>
  <h1>{{ msg }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{data.counter}}</p>
  <p>{{data.doubleCounter}}</p>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const data = reactive({
      counter: 0,
      doubleCounter: computed(() => data.counter*2)
    })
    let timer
    onMounted(()=>{
      timer = setInterval(() => {
        // data.counter++
      }, 1000);
    })
    onUnmounted(()=>{
      clearInterval(timer)
    })
    return {data}
  }
}
</script>
