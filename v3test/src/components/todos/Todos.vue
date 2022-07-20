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
import { reactive, toRefs, computed, watchEffect } from 'vue'
import EditTodo from './EditTodo.vue'
import TodoItem from './TodoItem.vue'
import Filter from './Filter.vue'
const filters = {
  all(todos){
    return todos
  },
  active(todos){
    return todos.filter((todo)=> !todo.completed)
  },
  completed(todos){
    return todos.filter((todo)=> todo.completed)
  }
}
const todoStorage = {
  fetch(){
    let todos = JSON.parse(localStorage.getItem('vue3-todos') || '[]')
    // 第一次获取需要设置id
    todos.forEach((todo,index)=>{
      todo.id = index+1
    })
    return todos
  },
  save(todos){
    localStorage.setItem('vue3-todos',JSON.stringify(todos))
  }
}
export default {
    components:{
      TodoItem,
      EditTodo,
      Filter
    },
    setup() {
        const state = reactive({
            newTodo: "",
            todos: todoStorage.fetch(),            
            editedTodo: null,
            filterItems:[
              {label:'All',value:'all'},
              {label:'Active ',value:'active'},
              {label:'Completed',value:'completed'},
            ],
            visibility: "all",
            filterdTodos: computed(() => {
                return filters[state.visibility](state.todos);
            })
        });
        function addTodo() {
            state.todos.push({
                id: state.todos.length + 1,
                title: state.newTodo,
                completed: false
            });
            state.newTodo = ""; //将input置空 
        }
        function removeTodo(todo) {
          // 找到todo的索引，然后删除当前ToDo
          state.todos.splice(state.todos.indexOf(todo), 1);
        }   
        watchEffect(() => {
            // 副作用方法
            // 用谁就watch谁
            todoStorage.save(state.todos);
        });
        return {
            ...toRefs(state),
            addTodo,
            removeTodo,
        };
    },
    components: { EditTodo, TodoItem, Filter }
}
</script>

<style scoped>

</style>