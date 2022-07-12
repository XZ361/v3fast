<template>
  <h1>{{ msg }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{data.counter}}</p>
  <h3>{{msg2}}</h3>
  <p>{{data.doubleCounter}}</p>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    const data = useCounter()
    const msg2 = ref('hello msg2!')

    return {data, msg2}
  }
};
function useCounter() {
  const data = reactive({
    counter: 0,
    doubleCounter: computed(() => data.counter * 2)
  })
  let timer
  onMounted(() => {
    timer = setInterval(() => {
      // data.counter++
    }, 1000);
  })
  onUnmounted(() => {
    clearInterval(timer)
  })
  return data
}
</script>
