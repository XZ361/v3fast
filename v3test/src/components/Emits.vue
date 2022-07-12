<template>
    <div>
        <button @click="$emit('my-click')">自定义事件</button>
    </div>
</template>

<script>
export default {
    // emits: ['my-click']
}
</script>

<style lang="scss" scoped>

</style>