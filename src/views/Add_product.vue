<template>
    <div>
  <van-nav-bar
  title="发布商品"
  left-text="返回"
  left-arrow
  @click-left="goback"
  />
        <br>
        <form action="">
            <span class="tishi">商品名称：</span>
            <input type="text" v-model="productName">
            <br>
            <br>
            <span class="tishi">分类：</span>
            <input type="text" v-model="type">
            <br><br>
            <span class="tishi" >价格：</span>
            <input type="text" v-model="price" style="width: 100px; ">
            <br><br>
            <span class="tishi"> 描述：</span>
            <br><br>
            <textarea name="" id="" cols="35" rows="9" class="nonesize" placeholder="请输入商品描述" v-model="desc"></textarea>
            <br><br>
            <span class="tishi"> 上传图片：</span>
            <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1"/>
            <br><br>
            <center>
            <van-button plain type="primary" @click="pushProduct">上传商品</van-button></center>
        </form>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
data(){
    return{
        productName:'', 
        price:0,
        type:'',  //商品类型
        desc:'', //商品描述
        fileList:[],
    }
},
methods:{
    goback(){
      this.$router.go(-1);//返回上一页
    },
    afterRead(file){
    console.log(file);
    console.log(this.fileList[0]);
    },
    pushProduct(){
    if(this.productName!=''&&this.price!=0&&this.type!=''&&this.desc!='')
    {
        this.commit()
        this.$router.push({ name: '用户页' });
    }
    else
    {
        Toast("请填写完整后再提交");
    }
    },
    commit(){
    this.$net({
      method: 'post',
      url: '/ShopCenter/post_product',
      params:{
        shopUserId:this.$ls.get("user_info").id,
        productName:this.productName,
        productType:this.type,
        productDes:this.desc,
        price:this.price
      }
     }).then((response)=>{
        console.log(response);
        this.uploadPic(response.data);  //上传图片
        Toast("上传成功,等待后台管理员审核");
     }).catch((err)=>{
        console.log(err);
        Toast("网络报错,请稍后");
     })
    },
    uploadPic(id){
     var formData=new FormData();
      formData.append('file',this.fileList[0].file);
      this.$pic({
      method: 'post',
      url: '/api/reg',
      headers: {
       "content-type": "multipart/form-data"
      },
      data:formData,
      params:{
        option:2,
        id:id
      }
     }).then((response) => {
      console.log(response);
     }).catch(function(error) {
     })
     console.log(formData);    
    }
}
}
</script>

<style>
    /* 表单外边距 */
    form{
        margin: 27px;
    }
    /* 输入框 */
    input[type="text"]{
        height: 25px;
        border: 1.5px solid rgba(63, 79, 94, 0.525);
        padding: 0 6px;
        width: 185px;
        BORDER-LEFT-STYLE:none;
        BORDER-RIGHT-STYLE: none;
        BORDER-TOP-STYLE: none;
        font-size: larger;
    }
    /* 选择框 */
    select {
    width: 100px;
    padding: 4px 30px 4px 4px;
    font-size: 14px;
    font-weight: 500;
    border: 1.5px solid rgba(63, 79, 94, 0.525);
    height: 30px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(https://tinyurl.com/22s26jw9) 100% / 15% no-repeat white;
    }
    /* 超链接 */
    a{
        text-decoration: none;
        color: black;
    }
    /* 所有提示 */
    .tishi{
        font-weight: 550;
        color: rgba(63, 79, 94, 0.525);
        font-size: larger;
    }
    /* 发布按钮 */
    .button{
    width: 340px;
    height: 81px;
    background:linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
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
    .biaoti{
        font-size: 27px;
        color: white;
        font-weight: 600;
        margin: 0 auto;
    }
    .nonesize{
        resize:none;
        font-size: large;
    }
    /* 首行 */
    .head{
        line-height: 2;
        background: #89d8d3;
        font-weight: 500;
        font-size: 27px;
        color: white;
        height: 53px;
    }
    .head h1{
        margin: 0 1rem;
    }
</style>