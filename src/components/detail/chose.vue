<template lang="html">
  <section class="chose">
    <div class="chose-view">
      <h1 class="chose-view-title">
        {{product.name}}
        <span><br>类型 {{product.type_id}}</span>
      </h1>
      <span>{{product.price}}元</span>
      <p class="chose-view-intro">{{product.des}}</p>
    </div>
  <!-- 添加空函数 解决Safari浏览器 :active无效 -->
  </section>
</template>

<script>
import {
  MessageBox
} from 'mint-ui';
import {
  mapState
} from 'vuex'


export default {
  props:["message"],
  data(){
    return{
      id:'',
      product:[],
    }
    
  },
  methods: {

    //点击后把i赋值给colSelected,再通过判断决定是否添加选中样式 (active)
    colChose(i) {
      this.$store.commit('CHANGE_COL_SELECTED', i);
    },
    sizeChose(i) {
      this.$store.commit('CHANGE_SIZE_SELECTED', i);
    },
    //获取页面具体商品值
    getDeatil(){
     console.log(this.id);
     this.$net({
      method: 'get',
      url: '/ShopCenter/getProduct',
      params:{
        id:this.id,
      }
     }).then((response)=>{
      console.log(response)
      this.product=response.data;
      console.log(this.product)
      //vuex缓存商品页,防止返回没东西
      this.$store.commit('change_product',this.product)
      //使用vuex传递数据
      this.$store.commit('change_productid',this.id)
      this.$store.commit('change_title',response.data.name)
      this.$store.commit('change_price',response.data.price)
      this.$store.commit('change_path',"http://106.12.131.109:8083/product/" +this.id+".jpg")
      console.log(this.$store.state.category.product_id)
      this.flag=1;
     })
    }

  },
  beforeMount(){
  //传参数,没有传参的话就使用缓存
  if(this.message!=undefined)
  {
  this.id=this.message;
  console.log(this.id);
  this.getDeatil();
  }
  else{
    this.product=this.$store.state.category.product_detail;
  }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
.chose {
    padding: 3vw;

    .chose-view {
        > h1 {
            .fz(font-size,36);
            color: #2c3e50;
            > span {
                color: rgb(238, 113, 80);
            }
        }
        > span {
            line-height: 10vw;
            color: rgb(238, 113, 80);
            .fz(font-size,34);
            font-weight: 600;
        }

    }

    .chose-mychosed {

        background-color: #fff;
        > div {
            padding-top: 20px;
            display: -ms-flex;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;

            span {
                .fz(font-size,26);
                padding: 6px 10px;
                border: 1px solid rgb(111, 111,111);
                margin-right: 6vw;
                color: rgb(111, 111, 111);
                &.active,
                &:active {
                    color: rgb(238, 113, 80);
                    border-color: rgb(238, 113, 80);
                    -webkit-transform: scale(1.1);
                    transform: scale(1.1);
                }

            }
        }
    }

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
        .footer-addcar,
        .footer-gocar,
        .footer-index {
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

            color: #fff;
            background-color: rgb(238, 113, 80);
            letter-spacing: 0.2vw;
            &:active {
                background-color: #ff7d00;
            }
        }
    }
}
</style>
