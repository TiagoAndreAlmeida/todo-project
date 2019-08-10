<template>
  <div id="app">
    <Title title="Todos"/>
    <InputField v-on:add-todo="addTodo"/>
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
  data() {
    return {
      todosList: [
        {
          id: 0,
          name: 'Teste 1',
          completed: false
        },
        {
          id: 1,
          name: 'Teste 2',
          completed: true
        },
        {
          id: 3,
          name: 'Teste 3',
          completed: false
        }
      ]
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
