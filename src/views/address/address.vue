<template>
    <div>
        <van-nav-bar title="收货地址" left-text="返回" left-arrow @click-left="goback" right-text="添加" right-arrow @click-right="addaddress"/>
        <van-cell-group>
            <div v-for="add in adds" :key="add.user_name">
                <van-card>
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
                        <van-button plain type="info">修改地址</van-button>
                    </template>
                </van-card>
                <van-divider />
            </div>
        </van-cell-group>
    </div>
</template>

<script>
export default {
    data() {
      return {
        adds:[
              {
                  user_name: 'ckx',
                  phone: '19321501919',
                  address: '上海市嘉定区曹安公路4800号19号楼321',
                  add_state: '默认'
              },
              {
                  user_name: 'ckx',
                  phone: '19321501919',
                  address: '上海市嘉定区曹安公路4800号19号楼321',
                  add_state: ''
              }
          ],
        user_orders:this.$ls.get(this.$route.params.id+"orders")
        }
    },
    methods: {
      goback(){
          this.$router.go(-1);//返回上一页
      }
      ,
      addaddress()
      {
        this.$router.push({ name: '地址添加页' });

      }
    }
}
</script>