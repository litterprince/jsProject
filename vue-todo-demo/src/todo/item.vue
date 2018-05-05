<template>
    <div :class="['todo-item',todo.completed?'completed':'']">
        <input type="checkbox" class="toggle" v-model="todo.completed">
        <label>{{todo.content}}</label>
        <button class="destroy" @click="delItem"></button>
    </div>
</template>

<script>
    export default {
        props:{
            todo:{
                type:Object,
                required:true
            },
            itemIndex: Number
        },
        data(){
            return {
                index: this.itemIndex
            }
        },
        methods:{
            delItem(){
                this.$emit('deleteItem', this.index);
            }
        }
    }
</script>

<style lang="less" scoped>
    button,input {
        outline:0
    }
    button {
        margin:0;
        padding:0;
        border:0;
        background:none;
        font-size:100%;
        vertical-align:baseline;
        font-family:inherit;
        font-weight:inherit;
        color:inherit
    }
    .todo-item {
        position:relative;
        left:1px;
        width:598px;
        background:#fff;
        font-size:16px;
        border-bottom:1px solid #ededed;
        min-height:44px;
        label {
            white-space:pre-line;
            word-break:break-all;
            padding:15px 60px 15px 15px;
            margin-left:45px;
            display:block;
            line-height:1.2;
            transition:color .4s
        }
        .destroy{
            display:none;
            position:absolute;
            top:0;
            right:10px;
            bottom:0;
            width:44px;
            height:44px;
            margin:auto 0;
            font-size:30px;
            color:#cc9a9a;
            transition:color .2s ease-out;
            &:hover{
                color:#af5b5e
            }
            &:after{
                content:"\D7"
            }
        }
        &:hover{
            .destroy {
                display:block
            }
        }
    }
    .completed{
        label {
            color:#d9d9d9;
            text-decoration:line-through
        }
    }
    .toggle {
        text-align:center;
        width:40px;
        height:auto;
        position:absolute;
        top:5px;
        bottom:0;
        margin:auto 0;
        border:none;
        appearance:none;
        &:after {
            content:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="40" fill="none" stroke="#C6C6C6" stroke-width="3"/></svg>')
        }
        &:checked{
            &:after {
                content:url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="40" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#C6C6C6" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>')
            }
        }
    }
</style>