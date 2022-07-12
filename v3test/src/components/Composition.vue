<template>
    <div>
        <p>{{counter}}</p>
        <h3>{{ msg2 }}</h3>
        <p>{{doubleCounter}}</p>
        <p ref="desc"></p>
    </div>
</template>

<script>
import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue'

export default {
  setup(){
    // 可以直接解析返回的ref数据，并在模板中直接使用
    const {counter, doubleCounter} = useCounter()

    // 其他数据，单值响应式
    const msg2 = ref('hello msg2!')

    // 元素引用
    const desc = ref(null)

    // 侦听器
    watch(counter,(val,oldVal)=>{
      const p = desc.value
      p.textContent = `counter change from ${oldVal} to ${val}`
    })
    return {counter, doubleCounter, msg2, desc }
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

<style lang="scss" scoped>

</style>