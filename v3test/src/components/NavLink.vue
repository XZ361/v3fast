<template>
    <div :class="{active: isActive}" @click="navigate">
        {{route.name}}
    </div>
</template>

<script>
import { RouterLink, useLink } from 'vue-router'

export default {
    props: {
        ...RouterLink.props,
        inActiveClass:String
    },
    setup(props) {
       const {isActive,route,isExactActive,href,navigate} = useLink(props)
        console.log(isActive,route,isExactActive,href,navigate);
        return {isActive,route,navigate}
    }
}
</script>

<style scoped>
.active{
    /* background-color: aquamarine; */
    background-color: #3fb983;
}
</style>