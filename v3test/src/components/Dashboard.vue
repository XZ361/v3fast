<template>
    <ul>
        <li>
            <NavLink to="/"></NavLink>
            <!-- <router-link to="/">dashboard</router-link> -->
        </li>
        <li>
            <NavLink to="/about"></NavLink>
            <!-- <router-link to="/about">about</router-link> -->
        </li>
        <li>
            <!-- <router-link to="/todos">todos</router-link> -->
            <NavLink to="/todos"></NavLink>
        </li>
    </ul>
</template>

<script>
import NavLink from './NavLink.vue';
export default {
    components: { NavLink }
}
</script>

<style lang="scss" scoped>

</style>