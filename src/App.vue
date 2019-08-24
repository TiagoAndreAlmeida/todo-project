<template>
  <div id="app">
    <Title title="Todos"/>
    <InputField v-on:add-todo="addTodo"/>
    <!-- <div>{{todoList}}</div> -->
    <!-- <TodosList todos="todoList" v-on:del-todo="delTodo"/> -->
    <TodosList v-bind:todos="todosList" v-on:del-todo="delTodo"/>
  </div>
</template>

<script>
import Title from './components/layout/Title';
import InputField from './components/InputField';
import TodosList from './components/TodosList';

export default {
  name: 'app',
  components: {
    Title,
    InputField,
    TodosList
  },
  computed : {
    todosList(){
      return this.$store.getters.TODOS
    }
  },
  methods: {
    addTodo (todo) {
      this.todosList.push(todo);
    },
    delTodo (id) {
      this.todosList = this.todosList.filter( todo => todo.id !== id);
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
