<template>
  <!-- vue3实现一个todoList -->
  <div>
    <!-- 新增 -->

    <input type="text" v-model="newTodo" @keyup.enter="addTodo" autofocus placeholder="新增今日代办" autocomplete="off" />
    <button @click="addTodo">新增</button>
    <!-- todo列表 -->
    <ul>
      <li 
       :class="{completed: todo.completed, editing: todo === editedTodo}"
       v-for="todo in filterdTodos"
       :key="todo.id">
        <!-- 绑定完成状态 -->
        <div class="view">
          <input type="checkbox" v-model="todo.completed">
          <label @dblclick="editTodo(todo)">{{todo.title}}</label>
          <button @click="removeTodo(todo)">X</button>
        </div>
        <!-- 编辑待办 -->
        <input type="text"
         class="edit" 
         v-todo-focus="todo === editedTodo" 
         v-model="todo.title" 
         @blur="doneEdit(todo)"
         @keyup:enter="doneEdit(todo)" 
         @keyup:escape="cancelEdit(todo)" 
        />
      </li>
    </ul>
    <!-- 过滤 -->
    <p class="filters">
      <span
        @click="visibility = 'all'"
        :class="{ selected: visibility === 'all' }"
        >all</span
      ><span
        @click="visibility = 'active'"
        :class="{ selected: visibility === 'active' }"
        >active</span
      ><span
        @click="visibility = 'completed'"
        :class="{ selected: visibility === 'completed' }"
        >completed</span
      >
    </p>
  </div>
</template>

<script>
import { reactive, toRefs, computed } from 'vue'
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
export default {
  setup() {
    const state = reactive({
      newTodo: '',//新增
      todos: [],//待办列表 
      beforeEditCache: '', //缓存编辑前的title
      editedTodo: null, //正在编辑的todo 
      visibility: 'all',
      filterdTodos: computed(()=>{
        return filters[state.visibility](state.todos)
      })
    })
    function addTodo(){
      state.todos.push({
        id: state.todos.length + 1,
        title: state.newTodo,
        completed: false
      })
      state.newTodo = '' //将input置空 
    }
    function removeTodo(todo){
      // 找到todo的索引，然后删除当前ToDo
      state.todos.splice(state.todos.indexOf(todo),1)
    }
    function editTodo(todo) {
      state.beforeEditCache = todo.title
      state.editedTodo = todo
    } 
    function doneEdit(){
      state.editedTodo = null 
    }
    function cancelEdit(todo) {
      todo.title = state.beforeEditCache
      state.editedTodo = null  
    }
    return {
      ...toRefs(state),
      addTodo,
      removeTodo,
      editTodo,
      cancelEdit,
      doneEdit
    }
  },
  directives:{
    // 实现获取焦点的自定义指令
    "todo-focus":(el,binding)=>{
      if(binding.value){
        // 如果绑定的指令为true，执行获取焦点的函数
        el.focus()
      }
    }
  }
}
</script>

<style scoped>
.completed label{
  text-decoration: line-through;
}

.edit,
.editing .view{
  display: none;
}
.view,
.editing  .edit{
  display: block;
}
.filters>span{
  padding: 2px 4px;
  margin-right: 4px;
  border: 1px solid transparent;
}
.filters > span.slected{
  border-color:rgb(10, 2, 2);
}
</style>