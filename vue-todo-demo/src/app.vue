<template>
    <div id="app">
        <div id="cover"></div>
        <NavHeader><h1 class="title-header" slot="content">JustTodo</h1></NavHeader>
        <Todo></Todo>
        <NavFooter></NavFooter>
    </div>
</template>

<script>
    import NavHeader from './todo/header.vue'
    import Todo from './todo/todo.vue'
    import NavFooter from './todo/footer.jsx'
    export default {
        data(){
            return {
                message: 'hi'
            }
        },
        components:{
            NavHeader,
            NavFooter,
            Todo
        }
    }
</script>

<style lang="less" scoped>
    #app{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
    }
    #cover{
        position: absolute;
        left:0;
        top:0;
        right:0;
        bottom:0;
        background-color:#999;
        z-index: -1;
        opacity: 0.7;
    }
</style>