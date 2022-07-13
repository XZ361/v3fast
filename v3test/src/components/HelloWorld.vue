<template>
  <h1>{{ msg }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <Composition></Composition>
  <!-- teleport: ModelButton -->
  <ModelButton></ModelButton>
  <!-- Emits Component option-->
  <Emits @my-click="onClick"></Emits>
  <!-- 实例方法定义组件 -->
  <comp></comp>
</template>

<script>
// import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue'
import Composition from './Composition.vue'
import ModelButton from './ModelButton.vue'
import Emits from './Emits.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Composition,
    ModelButton,
    Emits
  },
  methods: {
    onClick() {
      console.log('click me!');
    }
  },
};
</script>
