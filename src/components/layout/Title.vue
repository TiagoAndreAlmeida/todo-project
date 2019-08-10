<template>
    <h1>{{title}}</h1>
</template>

<script>
export default {
    name: 'Title',
    props: [
        'title'
    ]
}
</script>

<style scoped>
h1{
    color: rgb(252, 125, 125);
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>