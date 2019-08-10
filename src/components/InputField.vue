<template>
    <input v-model="title" @keydown.enter="addTodo" placeholder="What ned to be done?"/>
</template>

<script>
export default {
    name: 'InputField',
    data () {
        return {
            title: ''
        }
    },
    methods: {
        addTodo () {
            const newTodo = {
                id: Math.round(Math.random() * 10000),
                name: this.title,
                completed: false

            }
            this.$emit('add-todo', newTodo),
            this.title = ''
        }
    }
}
</script>