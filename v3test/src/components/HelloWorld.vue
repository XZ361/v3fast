<template>
  <h1>{{ msg }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  <Composition></Composition>
  <!-- teleport: ModelButton -->
  <ModelButton></ModelButton>
</template>

<script>
// import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue'
import Composition from './Composition.vue'
import ModelButton from './ModelButton.vue'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Composition,
    ModelButton
  }
};
</script>
