<template>
    <div>
        <nav-header></nav-header>
        <nav-bread><span slot="breadName">Order Success</span></nav-bread>
        <div class="container">
          <div class="page-title-normal">
            <!--<h2 class="page-title-h2"><span>check out</span></h2>-->
          </div>
          <!-- 进度条 -->
          <div class="check-step">
            <ul>
              <li class="cur"><span>Confirm</span> address</li>
              <li class="cur"><span>View your</span> order</li>
              <li class="cur"><span>Make</span> payment</li>
              <li class="cur"><span>Order</span> confirmation</li>
            </ul>
          </div>

          <div class="order-create">
            <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
            <div class="order-create-main">
              <h3>恭喜! <br>您的订单处理成功!</h3>
              <p>
                <span>订单 ID：{{orderId}}</span>
                <span>订单总金额：{{orderTotal}}</span>
              </p>
              <div class="order-create-btn-wrap">
                <div class="btn-l-wrap">
                  <a href="javascript:;" class="btn btn--m">查看购物车</a>
                </div>
                <div class="btn-r-wrap">
                  <a href="javascript:;" class="btn btn--m">查看商品列表</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import './../assets/css/base.css'
    import './../assets/css/checkout.css'
    import NavHeader from './../components/Header'
    import NavBread from './../components/Bread'
    import NavFooter from './../components/Footer'

    export default {
        data: function () {
            return{
                orderId: this.$route.params.orderId,
                orderTotal: 0
            }
        },
        components:{
            NavHeader,
            NavBread,
            NavFooter
        },
        mounted:function () {
            this.getOrderInfo();
        },
        methods:{
            getOrderInfo(){
                this.$http.get('/users/getOrder',{
                    params: {orderId: this.orderId}
                }).then(res=>{
                    if(res.data.status == '0' && res.data.result){
                        this.orderTotal = res.data.result;
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
