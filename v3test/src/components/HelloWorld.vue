<template>
  <h1>{{ msg }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <p>{{counter}}</p>
  <h3>{{msg2}}</h3>
  <p>{{doubleCounter}}</p>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, ref, toRefs } from 'vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup(){
    // 可以直接解析返回的ref对象，并在模板中直接使用
    const {counter, doubleCounter} = useCounter()
    const msg2 = ref('hello msg2!')

    return {counter, doubleCounter, msg2}
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
  return toRefs(data)     
  // 将data中 的key转化成ref响应式数据
}
</script>
