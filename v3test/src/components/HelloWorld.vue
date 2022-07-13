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

  <!-- v-model的使用 -->
  <VModelTest v-model="counter"></VModelTest>
  <!-- 等效于 -->
  <!-- <VModelTest :modelValue="counter" @update:modelValue="counter=$event"></VModelTest> -->


  <!-- render api的变化 -->
  <RenderTest v-model:counter="counter">
    <!-- 插槽使用 -->
    <!-- 默认插槽 -->
    <template v-slot:default>title</template>
    <!-- 具名插槽 -->
    <template v-slot:content>content.....</template>
  </RenderTest>

  <!-- 函数式组件 -->
  <Functional level="3">这是一个动态h元素</Functional>

  <!-- 异步组件 -->
  <AsyncComp></AsyncComp>
</template>

<script>
// import { computed, onMounted, onUnmounted, reactive, ref, toRefs, watch } from 'vue'
import Composition from './Composition.vue'
import ModelButton from './ModelButton.vue'
import Emits from './Emits.vue'
import VModelTest from './VModelTest.vue';
import Functional from './Functional.vue'
import { h } from 'vue';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components:{
    Composition,
    ModelButton,
    Emits,
    VModelTest,
    Functional,
    AsyncComp: () => {import('./NextPage.vue')},
    RenderTest:{
      props: {
        counter: {
          type: Number,
          default: 0
        },
      },
      render(){
        return h('div', [
          h('div', {onClick: this.onClick }, [
            `RenderTest: ${this.counter}\n`,
            this.$slots.default(), //获取默认插槽内容
            this.$slots.content()  //获取具名插槽的内容
            ])
        ])
      },
      methods: {
        onClick() {
          this.$emit('update:counter', this.counter+1)
        }
      },
    }
  },
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    onClick() {
      console.log('click me!');
    }
  },
};
</script>
