<template>
    <div>
        <van-nav-bar title="添加地址" left-text="返回" left-arrow @click-left="goback" />
        <br>
        <form action="">
            <span class="tishi">收货人：</span>
            <input type="text" v-model="userName">
            <br>
            <br>
            <span class="tishi">手机号码：</span>
            <input type="text" v-model="phone">
            <br><br>
            <span class="tishi"> 地址：</span>
            <br><br>
            <textarea name="" id="" cols="35" rows="9" class="nonesize" placeholder="请输入详细地址" v-model="address"></textarea>
            <br><br>
            <center>
                <van-button plain type="primary" @click="pushAddress">完成</van-button>
            </center>
        </form>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            userName: '',
            phone: '',  
            address: '', 
        }
    },
    methods: {
        goback() {
            this.$router.go(-1);//返回上一页
        },
        pushAddress() {
            if (this.userName != '' && this.phone!= 0 && this.address != '') {
                this.commit()
            }
            else {
                Toast("请填写完整后再提交");
            }
        },
        commit() {
            this.$net({
                method: 'post',
                url: '/ShopTransaction/add_delivery_address',
                params: {
                    user_id: this.$ls.get("user_info").user_id,
                    addr: this.address,
                    phone_number: this.phone,
                    name: this.userName,
                    add_default: 0
                }
            }).then((response) => {
                console.log(response);
                Toast("上传成功");
                this.$router.push({ name: '用户页' });
            }).catch((err) => {
                console.log(err);
                Toast("网络报错,请稍后");
            })
        },
    }
}
</script>

<style>
/* 表单外边距 */
form {
    margin: 27px;
}

/* 输入框 */
input[type="text"] {
    height: 25px;
    border: 1.5px solid rgba(63, 79, 94, 0.525);
    padding: 0 6px;
    width: 185px;
    BORDER-LEFT-STYLE: none;
    BORDER-RIGHT-STYLE: none;
    BORDER-TOP-STYLE: none;
    font-size: larger;
}



/* 所有提示 */
.tishi {
    font-weight: 550;
    color: rgba(63, 79, 94, 0.525);
    font-size: larger;
}

/* 发布按钮 */
.button {
    width: 340px;
    height: 81px;
    background: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
    border: none;
    border-radius: 10px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 34px;
    color: #fff;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, .5),
        7px 7px 20px 0px rgba(0, 0, 0, .1),
        4px 4px 5px 0px rgba(0, 0, 0, .1);
    outline: none;
    position: relative;
    z-index: 0;
}

.biaoti {
    font-size: 27px;
    color: white;
    font-weight: 600;
    margin: 0 auto;
}

.nonesize {
    resize: none;
    font-size: large;
}

/* 首行 */
.head {
    line-height: 2;
    background: #89d8d3;
    font-weight: 500;
    font-size: 27px;
    color: white;
    height: 53px;
}

.head h1 {
    margin: 0 1rem;
}
</style>