<template>
    <div>
        <van-nav-bar title="收货地址" left-text="返回" left-arrow @click-left="goback" right-text="添加" right-arrow @click-right="addaddress"/>
        <van-cell-group>
            <div v-for="add in adds" :key="add.user_name">
                <van-card @click='goSelect(add)'>
                    <template #title>
                        <span style="font-size:20px">{{add.user_name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{add.phone}}</span>
                        <br /><br />
                    </template>
                    <template #tags>
                        <van-tag plain type="danger">{{add.add_state}}</van-tag>
                    </template>
                    <template #price>
                        <span style="font-size:20px">{{add.address}}</span>
                    </template>
                    <template #footer>
                        <van-button plain type="info" @click="goedit(add)">修改地址</van-button>
                    </template>
                </van-card>
                <van-divider />
            </div>
        </van-cell-group>
    </div>
</template>

<script>
import eventBus from '@/views/address/eventBus.js'
export default {
    data() {
      return {
        adds:[
              {
                  user_name: '12',
                  phone: '19321501919',
                  address: '上海市嘉定区曹安公路4800号19号楼321',
                  add_state: '默认',
                  add_id:'00000'
              },
              {
                  user_name: '123',
                  phone: '19321501919',
                  address: '上海市嘉定区曹安公路4800号19号楼321',
                  add_state: '',
                  add_id: ''
              }
          ],
        user_orders:this.$ls.get(this.$route.params.id+"orders")
        }
    },
    created() {
        //从订单页面进来的
        if (this.$route.query.type == 'select') {
            this.pathStatus = true;
        }

        //this.getData();
    },
    methods: {
      goback(){
          this.$router.go(-1);//返回上一页
      }
      ,
      addaddress()
      {
        this.$router.push({ name: '地址添加页' });

      },
      goedit(add){

          console.info(add);
          this.$router.push({
              name: '地址修改页',
              query: {
                  user_name: add.user_name,
                  phone: add.phone,
                  address: add.address,
                  add_state: add.add_state,
                  addressid: add.add_id,
              }
          }) 
      },
      goSelect(add)
      {
          if (this.pathStatus) {
            window.console.log(add);
              eventBus.$emit('selectAddress', add);
              //调用router回退页面
              this.$router.go(-1);
              return;
          }
      }
    }
}
</script>