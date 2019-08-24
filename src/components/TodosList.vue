<template>
    <div id="todos-container">
        <div  v-for="todo in todos" v-bind:key="todo.id">
            <Todo v-bind:todo="todo"/>
        </div>
    </div>
</template>

<script>
import Todo from './Todo';

export default {
    name: 'TodosList',
    components: {
        Todo
    },
    props: [
        'todos'
    ]
    
}
</script>

<style scoped>
#todos-container {
    display: flex;
    flex-direction: column;
    
}
</style>