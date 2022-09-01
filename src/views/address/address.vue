<template>
    <div>
        <van-nav-bar title="收货地址" left-text="返回" left-arrow @click-left="goback" right-text="添加" right-arrow @click-right="addaddress"/>
        <van-cell-group>
            <div v-for="add in adds" :key="add.Name">
                <van-card @click='goSelect(add)'>
                    <template #title>
                        <span style="font-size:20px">{{add.Name}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{add.Phone_number}}</span>
                        <br /><br />
                    </template>
                    <template #tags>
                        <van-tag plain type="danger">{{add.add_state}}</van-tag>
                    </template>
                    <template #price>
                        <span style="font-size:20px">{{add.Addr}}</span>
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
        adds:[],
        user_orders:this.$ls.get(this.$route.params.id+"orders")
        }
    },
    created() {
        //从订单页面进来的
        if (this.$route.query.type == 'select') {
            this.pathStatus = true;
        }

        this.getdata();
    },
    methods: {
        getdata() {
            console.log(this.$ls.get("user_info").user_id);
            this.$net({
                method: 'get',
                url: '/ShopTransaction/get_delivery_address',
                params: {
                    UserID: this.$ls.get("user_info").user_id
                }
            }).then(res => {
                console.log(res.data);
                this.adds = res.data;
            })

        },
        goback() {
            this.$router.go(-1);//返回上一页
        }
        ,
        addaddress() {
            this.$router.push({ name: '地址添加页' });

        },
        goedit(add) {

            
            this.$router.push({
                name: '地址修改页',
                query: {
                    user_name: add.Name,
                    phone: add.Phone_number,
                    address: add.Addr,
                    add_state: add.Add_default,
                    addressid: add.Id,
                }
            })
        },
        goSelect(add) {
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