<template>
    <div>
        <van-nav-bar title="添加地址" left-text="返回" left-arrow @click-left="goback" />
        <br>
        <form action="">
            <van-cell-group>
                <van-field v-model="userName" required label="收货人" placeholder="请输入收货人" />
                <van-field v-model="phone" required label="手机号" placeholder="请输入手机号" />
                <van-field v-model="address" rows="3" autosize required label="地址" type="textarea" placeholder="请输入地址" />
            </van-cell-group>
            <center>
                <button class="btn back p-cu-p" @click="pushAddress" type="button">完成</button>
            </center>
        </form>
    </div>
</template>

<script>
import { Toast } from 'vant';
import { Field } from 'vant';
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
            if (!this.checkPhone(this.phone))
            {
                Toast("请填写正确的手机号码");
            }
            else if (this.userName != '' && this.phone!= 0 && this.address != '') {
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
                this.$router.go(-1);
                Toast("上传成功");
                
            }).catch((err) => {
                console.log(err);
                Toast("网络报错,请稍后");
            })
        },
        checkPhone(value) {
            var phone = value;
            if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(phone)) {
                return false;
            } else {
                return true;
            }
        }
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