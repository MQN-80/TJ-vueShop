<template lang="html">
  <footer class="footer">
    <router-link :to="{name:'首页'}" class="footer-index">
      <i class="icon-index"></i>
    </router-link>
    <router-link  :to="{name:'购物车页'}" class="footer-gocar">
      <i class="icon-car"></i>
      <span v-if="count">{{count}}</span>
    </router-link>
    <span class="footer-gocar" @click="addIntoCollect">
      <img :src="icon_collect"/>
    </span>
    <span class="footer-addcar" @click="addIntoCar">
      加入购物车
    </span>
    <span class="footer-addstr" @click="addInto">
      支付
    </span>
  </footer>
</template>

<script>
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
import collect from'@/assets/user/collect.png'
import collect_filled from'@/assets/user/collects.png'
export default {
  computed: {

    count () {
      //页面刷新后 数据会消失,解决:加判断
      if (this.$store.state.detail.count == '') {
        this.$store.commit('CHANGE_COUNT');
      }
      return this.$store.state.detail.count
    },
    productDatasView () {
      return this.$store.state.detail.productDatas.view
    },
    colSelected () {
      return this.$store.state.detail.colSelected
    },
    sizeSelected () {
      return this.$store.state.detail.sizeSelected
    }
  },
    data () {
				return {
          icon_collect:collect,
          collect_list:this.$ls.get("favorites"),
          new_collect:[],
          collect_flag:'',
				  }
		 }, 
     created(){
      var judge=check(this.productDatasView.id);
      if(judge==1)
      {
        icon_collect=collect_filled;
      }
      else
      {
        icon_collect=collect;
      }
     },
  methods: {
    addIntoCar () {
      //  mint-ui的弹出式提示框
      const product = [{
        title: this.$store.state.category.title,
        price: this.$store.state.category.price,
        id: this.$store.state.category.product_id,
        imgPath: this.$store.state.category.imgPath,
        choseBool: false
      }];
      MessageBox
        .confirm
        (
        `商品名称:${product[0].title}</br>` +
        `价格:${product[0].price}</br>` +
        `商品ID:${product[0].id}</br>`
        )
        .then(action => {      //点击成功执行这里的函数
          this.$store.dispatch('setLocalCount', true);
          this.$store.dispatch('addCarList', product);

          Toast({
            message: '添加成功',
            duration: 1000
          });
        }, function (err) {
        });
    },
    addInto () {
      //  mint-ui的弹出式提示框
      const product = [{
       title: this.$store.state.category.title,
        price: this.$store.state.category.price,
        id: this.$store.state.category.product_id,
        imgPath: this.$store.state.category.imgPath,
        choseBool: false
      }];
      


      MessageBox
        .confirm
        (
        `商品名称:${product[0].title}</br>` +
        `价格:${product[0].price}</br>` +
        `商品ID:${product[0].id}</br>`
        )
        .then(action => {      //点击成功执行这里的函数

          this.$store.dispatch('resetMidList');
          this.$store.dispatch('resetOrderID');
          this.$store.dispatch('addMidList', product);
          //提交订单信息
          this.$net({
            method: 'post',
            url: '/ShopTransaction/add_deal_record',
            params: {
              //arr: this.$store.state.detail.midList
              Product_id: this.$store.state.category.product_id,
              Ord_price:  this.$store.state.category.price,
              UserID: this.$ls.get("user_info").user_id
            }
          }).then(res => {
            console.log(res);
            this.$store.dispatch('transOrderID', res.data);
            this.$router.push({ name: '现付页' });
          })
        }, function (err) {
        });
    },
    addIntoCollect(){

      if(this.icon_collect==collect)
      {
        this.icon_collect=collect_filled;
      }
      else
      {
        this.icon_collect=collect;
      }
      ;
    },
    check(item){
      for (let i=0; i<this.collect_list.length; i++){
				if (this.collect_list[i].id == item){
					return 1;
				}
			}
      return 0;
    },
    del(item){
      for (let i=0; i<this.collect_list.length; i++){
				if (this.collect_list[i].id == item){
					this.collect_list.splice(i, 1)
				}
			}
			console.log(this.collect_list)
    },
    add(collect_item){
      this.collect_list.push(collect_item);
      this.$ls.set("favorites",this.collect_list);
    }
  }
}
</script>

<style lang="less" scoped>
@import "../../assets/fz.less";
@import "../../assets/index/style.css";

.footer {
  width: 100%;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  height: 14vw;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  -moz-user-select: none;
  -webkit-user-select: none;
  .bt();
  .footer-index,
  .footer-gocar,
  .footer-addcar {
    text-align: center;
  }
  .footer-addstr {
    text-align: center;
  }
  .footer-index {
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    line-height: 14vw;
    height: 14vw;
    padding-top: 1.5vw;
    border-right-color: #f7f7f7;
    border-right-style: solid;
    .fz(border-right-width,1);

    i {
      .fz(font-size,45);
    }
    &:active {
      background-color: #f1f1f1;
    }
  }

  .footer-gocar {
    position: relative;
    -webkit-flex: 3;
    -ms-flex: 3;
    flex: 3;
    height: 14vw;
    line-height: 14vw;
    padding-top: 1.6vw;
    span {
      height: 5.5vw;
      width: 5.5vw;
      line-height: 5.5vw;
      position: absolute;
      top: 0.5vw;
      right: 5.5vw;
      background-color: rgb(238, 113, 80);
      border-radius: 50%;
      color: #fff;
      .fz(font-size,24);
    }
    img{
      width: 30px;
      height: 30px;
      position:relative;
      bottom:6px;
    }
    &:active {
      background-color: #f1f1f1;
    }
    i {
      .fz(font-size,48);
    }
  }

  .footer-addcar {
    -webkit-flex: 6;
    -ms-flex: 6;
    flex: 6;
    line-height: 14vw;
    height: 14vw;

    color: rgb(255, 255, 255);
    background-color:  #fca67e;
    letter-spacing: 0.2vw;
    &:active {
      background-color: #fa4b4b;
    }
  }
    .footer-addstr {
    -webkit-flex: 6;
    -ms-flex: 6;
    flex: 6;
    line-height: 14vw;
    height: 14vw;

    color: #fff;
    background-color:  #ff2e2e;
    letter-spacing: 2vw;
    &:active {
      background-color: #ff8400;
    }
  }
    .footer-addcollects {
    line-height: 14vw;
    height: 14vw;
    color: rgb(0, 0, 0);
    background-color:  #ffffff;
    letter-spacing: 2vw;
    &:active {
      background-color: #ff8400;
    }
  }
}
</style>
