<template>
    <div>
        <section class="toast-container">
            <div class="toast-content" :class="[visible ? 'fade-in' : 'fade-out']">
                <span>{{message}}</span>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                message: '',
                visible: false
            }
        }
    }
</script>

<style scoped lang="less">
    @keyframes fade-in {
        from { transform:scale(0.7);opacity: 0 }
        to { transform:scale(1);opacity: 1  }
    }
    @keyframes fade-out {
        from { transform:scale(0.7);opacity: 1 }
        to { transform:scale(0);opacity: 0  }
    }
    .toast-container{
        position: absolute;
        top:0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 2000;
        display: flex;
        justify-content: center;
        align-items:center;
        .toast-content{
            padding:0 5px 0 5px;
            min-width: 180px;
            width: auto;
            height: 60px;
            line-height: 60px;
            background-color: #0000009c;
            color:white;
            border-radius: 10px;
            text-align: center;
        }
        .fade-in{
            animation-name: fade-in;
            animation-duration: 0.3s;
        }
        .fade-out{
            animation-name: fade-out;
            animation-duration: 0.3s;
        }
    }
</style>