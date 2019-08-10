<template>
    <div class="todo-item">
        <input type="checkbox" v-model="todo.completed" v-on:change="markCompleted" />
        <h4 v-bind:class="{'completed':todo.completed}">{{todo.name}}</h4>
        <button @click="$emit('del-todo', todo.id)" class="btn">x</button>
    </div>
</template>

<script>
export default {
    name: 'Todo',
    props: ['todo'],
    methods: {
        markCompleted () {
            this.todo.completed = !this.todo.completed;
        }
    }
}
</script>

<style scoped>
.todo-item {
    display: inline-flex;
    background-color: aliceblue;
    margin-left: 10px;
    margin-top: 10px;
    align-content: flex-start;
}
.todo-item h4 {
    padding: 10px 5px;
}
.completed {
    font-style: italic;
    color: rgb(114, 114, 114);
    text-decoration: line-through;
}
.btn {
    border-radius: 15px;
    cursor: pointer;
    border-width: 0px;
    background: rgb(211, 115, 115);
    width: 30px;
    font-size: 15px;
    height: 30px;
}
</style>