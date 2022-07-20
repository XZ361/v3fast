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
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
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
        
      return {
        ...toRefs(todoState),
        ...toRefs(filterState),
        addTodo,
        removeTodo,
      };
    },
    components: { EditTodo, TodoItem, Filter }
}
</script>

<style scoped>

</style>