<template>
    <header class="main-header">
        <slot name="content"></slot>
    </header>
</template>
<style lang="less" scoped>
    .main-header{
        text-align: center;
        .title-header{
            font-size:80px;
            color:rgba(175,47,47,0.4);
            font-weight: bold;
            margin:20px;
        }
    }
</style>