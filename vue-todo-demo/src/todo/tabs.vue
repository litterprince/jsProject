<template>
    <div class="helper">
        <span class="left">{{total}} 项事项</span>
        <span class="tabs">
            <span v-for="item in states"
                  :class="{'actived':item.checked}"
                  @click="btnClick(item)">
                {{item.name}}
            </span>
        </span>
        <span class="clear" @click="clearItem">清空已完成</span>
    </div>
</template>

<script>
    export default {
        props:['total'],
        data(){
            return {
                states:[
                    {
                        id:'all',
                        name:'全部',
                        checked:true
                    },
                    {
                        id:'active',
                        name:'未完成',
                        checked:false
                    },
                    {
                        id:'completed',
                        name:'已完成',
                        checked:false
                    }
                ]
            }
        },
        methods:{
            btnClick(item){
                this.states.forEach((value,index)=>{
                    value.checked = item.id == value.id ? true : false;
                });
                this.$emit('selectItem', item.id);
            },
            clearItem(){
                this.$emit('clearItem');
            }
        }
    }
</script>

<style lang="less" scoped>
    button{
        border:none;
        background: none;
    }
    .helper {
        position:relative;
        left:1px;
        width:598px;
        height:50px;
        line-height:50px;
        background:#fff;
        text-align:center
    }
    .left {
        float:left;
        width:20%
    }
    .tabs {
        float:left;
        width:60%;
        span {
            padding:6px 10px;
            margin-right:10px;
            cursor:pointer;
        }
        .actived {
            border:2px solid rgba(175,47,47,.6);
            border-radius:4px
        }
    }
    .clear {
        float:left;
        width:20%;
        cursor:pointer
    }
</style>