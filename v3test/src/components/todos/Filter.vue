<template>
    <!-- 过滤 -->
    <p class="filters">
      <span
        v-for="item in items "
        :key="item.value"
        @click="$emit('update:modelValue',item.value)"
        :class="{ selected: modelValue === item.value }"
        >{{item.label}}
      </span>
    </p>
</template>

<script>
export default {
    props:['items','modelValue'],//输入
    emit:['update:modelValue']//输出
}
</script>

<style scoped>

.filters>span{
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
}
.filters > span.slected{
  border-color:rgba(173, 47, 47, .2) ;
}
</style>