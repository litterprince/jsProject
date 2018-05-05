<template>
    <section class="real-app">
        <input type="text"
               class="add-input"
               autofocus="autofocus"
               placeholder="接下来要做什么啊?"
               @keyup.enter="addTodo"
               v-model="content">
        <Item v-for="(item,index) in todoList"
              :todo="item"
              :itemIndex="index"
              v-show="item.show"
              @deleteItem="delTodo">
        </Item>
        <Tabs @selectItem="selTodo"
              @clearItem="clearTodo"
              :total="todoList.length">
        </Tabs>
    </section>
</template>

<script>
    import Item from './item.vue'
    import Tabs from './tabs.vue'
    export default {
        data(){
            return {
                todoList :[
                    {
                        content:'this is a text',
                        completed: false
                        //show: true
                    }
                ],
                content: ''
            }
        },
        mounted(){
            this.$nextTick(()=>{
                this.todoList.forEach((value, index, array)=>{
                    this.$set(value,'show',true);
                });
            })
        },
        components:{
            Item,
            Tabs
        },
        methods:{
            addTodo(){
                if(this.content != ''){
                    let todo = {
                        content : this.content,
                        completed: false,
                        show:true
                    };
                    this.todoList.push(todo);
                    this.content = '';
                }
            },
            delTodo(index){
                this.todoList.splice(index,1);
            },
            selTodo(state){
                this.todoList.forEach((value,index)=>{
                   let show = {
                       all:true,
                       active: !value.completed,
                       completed: value.completed
                   }[state];
                   value.show = show;
                });
            },
            clearTodo(){
                this.todoList = this.todoList.filter(item=>!item.completed);
            }
        }
    }
</script>

<style lang="less" scoped>
    .real-app{
        width:600px;
        margin:0 auto;
        box-shadow:0 0 5px #666;
        .add-input{
            position: relative;
            width:100%;
            font-size:24px;
            font-family: inherit;
            font-weight: inherit;
            line-height: 1.4em;
            outline: none;
            color:inherit;
            padding:16px;
            border:1px solid #999;
            box-shadow:inset 0 -1px 5px 0 rgba(0,0,0,0.5);
            box-sizing:border-box;
        }
    }
</style>