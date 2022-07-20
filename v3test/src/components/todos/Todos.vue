<template>
  <!-- vue3实现一个todoList -->
  <div>
    <!-- 新增 -->
    <EditTodo
      v-model:todo-title="newTodo" 
      @keyup.enter="addTodo" 
      autofocus 
      placeholder="新增今日代办" 
      autocomplete="off" 
    >
    </EditTodo>
    <!-- <input type="text" v-model="newTodo" @keyup.enter="addTodo" autofocus placeholder="新增今日代办" autocomplete="off" /> -->
    <!-- <button @click="addTodo">新增</button> -->
    <!-- todo列表 -->
    <ul>
      <TodoItem 
        v-for="todo in filterdTodos" 
        :key="todo.id"
        :todo="todo"
        v-model:edited-todo="editedTodo"
        @remove-todo="removeTodo">
      </TodoItem>
    </ul>
    <!-- 过滤 -->
    <Filter :items="filterItems" v-model="visibility"
    ></Filter>
    <!-- 回退到看板 -->
    <button @click="backToDash">返回</button>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue'
import {useRouter, useRoute} from 'vue-router'
import EditTodo from './EditTodo.vue'
import TodoItem from './TodoItem.vue'
import Filter from './Filter.vue'
import { useTodos } from './useTodo'
import useFilter from './useFilter'
export default {
    components:{
      TodoItem,
      EditTodo,
      Filter
    },
    setup() {
      const todoState = reactive({
        newTodo: "",
        editedTodo: null,
      })
      const {todos,addTodo,removeTodo} = useTodos(todoState)
      const filterState = useFilter(todos)
      const router = useRouter()
      // route是响应式对象，可以监控其变化
      const route = useRoute()
      watch(()=>route.query,query=>{
        console.log(query);
      })
      return {
        ...toRefs(todoState),
        ...toRefs(filterState),
        addTodo,
        removeTodo,
        backToDash(){
          router.push('/')
        }
      };
    },
    components: { EditTodo, TodoItem, Filter }
}
</script>

<style scoped>

</style>