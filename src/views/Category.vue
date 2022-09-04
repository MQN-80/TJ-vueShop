<template lang="html">
<div>
  <van-sticky> 
    <van-nav-bar
    title="分类"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"/>
    </van-sticky>
<!-- 菜单左右联动 -->  
  <div class="menu_detail" >
      <div class="menu_list">
          <van-sidebar v-model="tabValue" >
              <van-sidebar-item 
              :title="item.name" 
              v-for="(item,index) in menuList" :key="item" 
              @click="handleMenulist(index)"/>
          </van-sidebar>
      </div>
      <div id="goodListId">
          <div v-for="(item,index1) in menuList" :key="item" :id="'scroll'+index1">
              <div class="goods_card">
                  <van-card v-for="(goods,index2) in item.data" :key="coffee"
                  :title="goods.title"
                  :thumb="goods.thumb"
                  @click="goSearch(goods.title)"
                  centered="true">
                  </van-card>
              </div>
              <van-divider
                :style="{ color: '#ff6900', borderColor: '#ff6900', padding: '0 16px' }"
              />
          </div>
      </div>
  </div>
</div>
</template>

<script>
import { ref, reactive, toRefs, onMounted } from "vue";
import { Toast } from 'vant';

export default {
  name: "menu",
  setup() {
    const tabValue = ref(0);
    const state = reactive({
      menuList: [
        {
          name: "手机数码",
          data: [
            {
              title: "华为",
              thumb: "http://106.12.131.109:8083/avator/g11.jpg",
            },
            {
              title: "iPhone",
              thumb: "http://106.12.131.109:8083/avator/g12.jpg",
            },
            {
              title: "荣耀",
              thumb: "http://106.12.131.109:8083/avator/g13.jpg",
            },
            {
              title: "vivo",
              thumb: "http://106.12.131.109:8083/avator/g14.png",
            },
          ],
        },
        {
          name: "电脑办公",
          data: [
            {
              title: "组装电脑",
              thumb: "http://106.12.131.109:8083/avator/g21.jpg",
            },
            {
              title: "笔记本",
              thumb: "http://106.12.131.109:8083/avator/g22.png",
            },
          ],
        },
        {
          name: "图书音像",
          data: [
            {
              title: "人文社科",
              thumb: "http://106.12.131.109:8083/avator/g31.jpg",
            },
            {
              title: "文学",
              thumb: "http://106.12.131.109:8083/avator/g32.jpg",
            },
          ],
        },
        {
          name: "家用电器",
          data: [
            {
              title: "面包机",
              thumb: "http://106.12.131.109:8083/avator/g41.jpg",
            },
            {
              title: "电磁炉",
              thumb: "http://106.12.131.109:8083/avator/g42.png",
            },
          ],
        },
        {
          name: "生活用品",
          data: [
            {
              title: "口红",
              thumb: "http://106.12.131.109:8083/avator/g51.jpg",
            },
            {
              title: "牙膏",
              thumb: "http://106.12.131.109:8083/avator/g52.jpg",
            },
                        {
              title: "洗衣液",
              thumb: "http://106.12.131.109:8083/avator/g53.jpg",
            },
            {
              title: "沐浴露",
              thumb: "http://106.12.131.109:8083/avator/g54.jpg",
            }
          ],
        },

      ],
    });

    onMounted(() => {
      // 监听滚动条位置
      window.addEventListener("scroll", handleScroll, true);
    });

    //左侧菜单点击联动左侧
    const handleMenulist = (index) => {
      tabValue.value = index;
      let navPage = document.querySelector("#scroll" + index);
      //navPage.offsetTop需要减去165店铺头部所占高度，需<170否则菜单切换会回弹
      document.querySelector("#goodListId").scrollTop = navPage.offsetTop - 46;
    };

    //右侧菜单联动左侧
    const handleScroll = () => {
      //scrollTop从0开始增大，局限在#goodListId div内
      let scrollTop = document.querySelector("#goodListId").scrollTop;
      for (let a = 0; a < state.menuList.length; a++) {
        //offsetTop获取每块scroll的距离屏幕最顶端的值
        //本menuList中9组元素的offsetTop固定值介于[179,1879]
        //故offsetTop-170（店铺头部高度约140，增30余量）得到距离#goodListId最顶端的高度
        //循环比较当scrollTop一旦大于某scroll的offsetTop-170，则切换左侧菜单选中index
        if (document.querySelector("#scroll" + a).offsetTop - 134 < scrollTop) {
          tabValue.value = a;
        }
      }
    };

    return {
      ...toRefs(state),
      tabValue,
      handleMenulist,
    };
  },
  methods:{
      onClickLeft(){
          this.$router.push({name:'首页'})
      },
      goSearch(name)
      {
        Toast(name);
        this.$router.push({name:'搜索页',params:{type:2,val:name}})
      }
  }
};
</script>

<style>
.menu_detail {
  height: calc(100vh - 46px);
  display: flex;
}

.menu_list {
  width: auto;
  height: 100%;
  background-color: #fdf1ea;
}

#goodListId {
  overflow: auto;
  width: -webkit-fill-available;
}

/* 选中标签三角标识 */
.van-sidebar-item--select:before {
  position: absolute;
  top: 50%;
  left: 0;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-left: 10px solid #ff6900;
  border-bottom: 5px solid transparent;
  -webkit-transform: translateY(-50%);
  background-color: #fff;
  transform: translateY(-50%);
}
</style>
