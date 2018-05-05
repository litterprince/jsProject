<template>
  <div>
      <nav-header></nav-header>
      <nav-bread>
        <span slot="breadName">Goods</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a @click="sortGoods" class="price sort-up">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="filterbyShow=true">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" :class="{'filterby-show':filterbyShow}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a :class="{'cur':priceChecked=='all'}" @click="setPriceFilter('all')">All</a></dd>
                <dd v-for="(price,index) in priceFilter">
                  <a :class="{'cur':priceChecked==index}" @click="setPriceFilter(index)">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goodsList">
                    <div class="pic">
                      <a href="#"><img v-lazy="'/static/'+item.productImage" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a @click="addCart(item.productId)" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
                    <img src="/static/loading-svg/loading-spinning-bubbles.svg" v-show="loading" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav-footer></nav-footer>
  </div>
</template>
<style>
    .load-more{
        height: 100px;
        line-height: 100px;
        text-align: center;
    }
</style>
<script>
  import  './../assets/css/base.css'
  import  './../assets/css/product.css'
  import NavHeader from './../components/Header.vue'
  import NavFooter from './../components/Footer.vue'
  import NavBread from './../components/Bread.vue'

  export default {
    data: function(){
      return {
        goodsList: [],
        priceFilter:[
          { startPrice:'0.00', endPrice:'500.00' },
          { startPrice:'500.00', endPrice:'1000.00' },
          { startPrice:'1000.00', endPrice:'2000.00' }
        ],
        priceChecked: 'all',
        filterbyShow: false,
        sortFlag: true,
        page: 1,
        pageSize: 8,
        busy: true,
        loading: false,
        modelFlag: false,
        modelSrc: ''
      }
    },
    filters: {

    },
    mounted: function () {
      this.$nextTick(function () {
          this.getGoodsList();
      })
    },
    methods: {
      getGoodsList: function(flag){
          let param = {
              page: this.page,
              pageSize: this.pageSize,
              sort: this.sortFlag?1:-1,
              priceLevel: this.priceChecked
          };
          this.$http.get('/goods/list', {params:param}).then(res=>{
              if(res.data.status == 0) {
                  if(flag){
                    this.goodsList =  this.goodsList.concat(res.data.result.list);
                  }else{
                    this.goodsList = res.data.result.list;
                  }
                  this.busy = res.data.result.count == 0 ? true : false;
                  this.loading = res.data.result.count == 0 ? false : true;
              }
          }).catch(function (error) {
              console.log(error);
          });
      },
      sortGoods: function(){
          this.sortFlag = !this.sortFlag;
          this.page = 1;
          this.getGoodsList();
      },
      setPriceFilter:function(index){
          this.priceChecked = index;
          this.filterbyShow = false;
          this.page = 1;
          this.getGoodsList();
      },
      loadMore: function () {
        this.busy = true;
        this.loading = true;
        setTimeout(() => {
            this.page ++;
            this.getGoodsList(true);
        }, 1000)
      },
      addCart: function(id){
          this.$http.post('/users/addCart',{productId:id}).then(res=>{
              if(res.data.status == 0) {
                  this.$store.commit('increment');
                  alert("添加成功！");
              }else{
                  alert("添加失败！"+res.data.msg);
              }
          });
      }
    },
    components:{
        NavHeader,
        NavFooter,
        NavBread
    }
  }
</script>
