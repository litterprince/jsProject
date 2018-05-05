<template>
    <div>
        <nav-header></nav-header>
        <nav-bread><span slot="breadName">Address</span></nav-bread>
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <symbol id="icon-add" viewBox="0 0 31 32">
              <title>add</title>
              <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
            </symbol>
            <symbol id="icon-ok" viewBox="0 0 32 32">
              <title>ok</title>
              <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
            </symbol>
            <symbol id="icon-edit" viewBox="0 0 32 32">
              <title>edit</title>
              <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
            </symbol>
            <symbol id="icon-del" viewBox="0 0 32 32">
              <title>delete</title>
              <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
              <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
              <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
              <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            </symbol>
            <symbol id="icon-clock" viewBox="0 0 32 32">
              <title>clock</title>
              <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
            </symbol>
            <symbol id="icon-question" viewBox="0 0 32 32">
              <title>question</title>
              <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
              <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
              <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
            </symbol>
          </defs>
        </svg>
        <div class="container">
          <div class="checkout-addr">
            <!--<div class="page-title-normal">
              <h2 class="page-title-h2"><span>check out</span></h2>
            </div>-->
            <!-- process step -->
            <div class="check-step">
              <ul>
                <li class="cur"><span>Confirm</span> address</li>
                <li><span>View your</span> order</li>
                <li><span>Make</span> payment</li>
                <li><span>Order</span> confirmation</li>
              </ul>
            </div>

            <!-- address list -->
            <div class="page-title-normal checkout-title">
              <h2><span>收货地址</span></h2>
            </div>
            <div class="addr-list-wrap">
              <div class="addr-list">
                <ul>
                  <li v-for="(item,index) in addressList" v-show="index<limitNumber" :class="{'check': index==curIndex}" @click="curIndex=index">
                    <dl>
                      <dt>{{item.userName}}</dt>
                      <dd class="address">{{item.streetName}}</dd>
                      <dd class="tel">{{item.postCode}}</dd>
                    </dl>
                    <div class="addr-opration addr-edit">
                      <a @click="editModalShow(item)" class="addr-edit-btn">
                        <svg class="icon icon-edit"><use xlink:href="#icon-edit"></use></svg>
                      </a>
                    </div>
                    <div class="addr-opration addr-del">
                      <a @click="delConfirm(item)" class="addr-del-btn">
                        <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                      </a>
                    </div>
                    <div class="addr-opration addr-set-default" v-show="!item.isDefault">
                      <a @click="setDefault(item.addressId)" class="addr-set-default-btn"><i>设为默认</i></a>
                    </div>
                    <div class="addr-opration addr-default" v-show="item.isDefault">默认地址</div>
                  </li>
                  <li class="addr-new" @click="editModalShow(null)">
                    <div class="add-new-inner">
                      <i class="icon-add">
                        <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                      </i>
                      <p>Add new address</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="shipping-addr-more">
                <a class="addr-more-btn up-down-btn" @click="loadMore">
                  more
                  <i class="i-up-down">
                    <i class="i-up-down-l"></i>
                    <i class="i-up-down-r"></i>
                  </i>
                </a>
              </div>
            </div>

            <!-- shipping method-->
            <div class="page-title-normal checkout-title">
              <h2><span>配送方式</span></h2>
            </div>
            <div class="lemall-msg-info hidden">
              <span>The region you selected is not within our delivery area. Please select another shipping address within our delivery areas.</span>
            </div>
            <div class="shipping-method-wrap">
              <div class="shipping-method">
                <ul>
                  <li class="check">
                    <div class="name">标准配送</div>
                    <div class="price">免费</div>
                    <div class="shipping-tips">
                      <p>Once shipped，Order should arrive in the destination in 1-7 business days</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="order-foot-wrap">
              <div class="prev-btn-wrap">
                <a href="/#/cart" class="btn btn--m">上一步</a>
              </div>
              <div class="next-btn-wrap">
                <router-link :to="{path:'/orderConfirm?addressId='+selectAddrId}" class="btn btn--m btn--red">下一步</router-link>
              </div>
            </div>
          </div>
        </div>
        <!-- 删除提示 -->
        <modal :mdShow="delFlag" @close="closeDelModal">
            <h2 slot="message">确定删除吗？</h2>
            <div slot="btnGroup" class="btn-wrap col-2">
                <button class="btn btn--m" id="btnModalConfirm" @click="delAddr">确定</button>
                <button class="btn btn--m btn--red" @click="closeDelModal">取消</button>
            </div>
        </modal>
        <!-- 编辑页面 -->
        <modal :mdShow="editFlag" @close="closeEditModal">
            <div slot="message">
              <input v-model="editAddress.addressId" v-show="false" type="text" >
              <input v-model="editAddress.isDefault" v-show="false" type="checkbox">
              <div class="md-form-item">
                <label class="md-form-item__label" style="width: 80px;">
                  姓名
                </label>
                <div class="md-form-item__content" style="margin-left: 80px;">
                  <div  class="el-input">
                    <input v-model="editAddress.userName" type="text" autocomplete="off" class="md-input__inner">
                  </div>
                </div>
              </div>
              <div class="md-form-item">
                <label class="md-form-item__label" style="width: 80px;">
                  地址
                </label>
                <div class="md-form-item__content" style="margin-left: 80px;">
                  <div  class="el-input">
                    <input v-model="editAddress.streetName" type="text" autocomplete="off" class="md-input__inner">
                  </div>
                </div>
              </div>
              <div class="md-form-item">
                <label class="md-form-item__label" style="width: 80px;">
                  邮编
                </label>
                <div class="md-form-item__content" style="margin-left: 80px;">
                  <div  class="el-input">
                    <input v-model="editAddress.postCode" type="text" autocomplete="off" class="md-input__inner">
                  </div>
                </div>
              </div>
              <div class="md-form-item">
                <label class="md-form-item__label" style="width: 80px;">
                  电话号码
                </label>
                <div class="md-form-item__content" style="margin-left: 80px;">
                  <div  class="el-input">
                    <input v-model="editAddress.tel" type="text" autocomplete="off" class="md-input__inner">
                  </div>
                </div>
              </div>
            </div>
            <div slot="btnGroup" class="btn-wrap col-2">
                <button class="btn btn--s" @click="editAddr">保存</button>
                <button class="btn btn--s btn--red" @click="closeEditModal">取消</button>
            </div>
        </modal>
        <nav-footer></nav-footer>
    </div>
</template>

<script>
    import './../assets/css/base.css'
    import './../assets/css/product.css'
    import './../assets/css/checkout.css'
    import NavHeader from './../components/Header'
    import NavBread from './../components/Bread'
    import NavFooter from './../components/Footer'
    import Modal from "../components/Modal";

    export default {
        data: function () {
            return {
                addressList:[],
                curIndex: 0,
                limitNumber: 1,
                delAddress: {},
                delFlag: false,
                editAddress: {},
                editFlag: false
            }
        },
        computed:{
            selectAddrId(){
              if(this.addressList.length > 0){
                  return this.addressList[this.curIndex].addressId | '';
              }
              return '';
            }
        },
        components:{
            Modal,
            NavHeader,
            NavBread,
            NavFooter
        },
        mounted(){
            this.getAddressList();
            if(this.addressList) {
                this.addressList = this.addressList.sort((value)=>!value.isDefault);
            }
        },
        methods:{
            newAddressId: function(){
                var max = 100000;
                this.addressList.forEach((value, index)=>{
                    max = parseInt(value.addressId)>max ? parseInt(value.addressId) : max;
                });
                return max + 1;
            },
            getAddressList(){
                this.$http.get('/users/addressList').then(res=>{
                    if(res.data.status == '0'){
                        this.addressList = res.data.result;
                    }
                });
            },
            loadMore(){
                this.limitNumber = this.limitNumber == this.addressList.length ? 1 : this.addressList.length;
                this.addressList.sort((value)=>!value.isDefault);
            },
            setDefault(addressId){
                this.$http.post('/users/setDefaultAddr',{
                    addressId: addressId
                }).then(res=>{
                    if(res.data.status == '0'){
                        this.addressList.forEach((item, index)=>{
                            item.isDefault = item.addressId == addressId ? true : false;
                        });
                    }
                });
            },
            delConfirm(item){
                this.delFlag = true;
                this.delAddress = item;
            },
            delAddr(){
                this.$http.post('/users/delAddress', {
                    addressId: this.delAddress.addressId
                }).then(res=>{
                    if(res.data.status == '0'){
                        let index = this.addressList.indexOf(this.delAddress);
                        if(index>-1) {
                            this.addressList.splice(index, 1);
                            this.delAddress = {};
                            this.delFlag = false;
                        }
                    }
                });
            },
            closeDelModal(){
                this.delFlag = false;
                this.delAddress = {};
            },
            editModalShow(item){
                if(!!item){
                    this.editAddress = item;
                }else{
                    this.editAddress.addressId = this.newAddressId.toString();
                }
                this.editFlag = true;
            },
            editAddr(){
                this.$http.post('/users/editAddress',{
                    address: this.editAddress
                }).then(res=>{
                    if(res.data.status == '0'){
                        this.getAddressList();
                        this.editFlag = false;
                        this.editAddress = {};
                    }
                });
            },
            closeEditModal(){
                this.editFlag = false;
                this.editAddress = {};
            }
        }
    }
</script>

<style scoped>
    .md-form-item{
      margin:10px;
    }
    .md-form-item__label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #48576a;
      line-height: 1;
      padding: 11px 12px 11px 0;
      box-sizing: border-box;
    }
    .md-form-item__content {
      line-height: 36px;
      position: relative;
      font-size: 14px;
    }
    .md-input__inner {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #fff;
      background-image: none;
      border-radius: 4px;
      border: 1px solid #333;
      box-sizing: border-box;
      color: #1f2d3d;
      display: block;
      font-size: inherit;
      height: 36px;
      line-height: 1;
      outline: 0;
      padding: 3px 10px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
    }
    .md-input__inner:focus{border-color:#20a0ff}
</style>
