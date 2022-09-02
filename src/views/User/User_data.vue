
<template lang="html">
<div>
  <div class="my-info">
  <van-nav-bar
  title="个人信息修改"
  left-text="返回"
  left-arrow
  @click-left="goback"
  />
    </div>
<div class="header">
  <div class="header-info">
    点击更换头像<br/>
    <van-uploader :after-read="afterRead" v-model="fileList" :max-count="1" />
  </div>
</div>
<div>
  <van-cell-group>
  <van-cell />
  <van-field
  size="large"
  label="用户昵称"
  v-model="user_name"
  input-align="right"
   input="onChange_weight"
  />
  <van-field
  size="large"
  label="个人介绍"
  v-model="user_desc"
  input-align="right"
  rows="5"
  maxlength="150"
  show-word-limit
   input="onChange_waistline"
  />
  <van-cell v-on:click="saveData" title=" " value="点此保存数据" is-link />
</van-cell-group>
</div>
</div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data() {
      return {
          user_name:this.$ls.get("data")[0].UserName,
          user_desc:this.$ls.get("data")[0].UserDetail,
          fileList:[],
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      goback(){
          this.$router.go(-1);//返回上一页
      },
      saveData(){
      this.$net({
      method: 'post',
      url: '/userCenter/update_user_info',
      params:{
        user_id:this.$ls.get("user_info").user_id,
        user_name:this.user_name,
        user_detail:this.user_desc
      }
     }).then((response) => {
      console.log(response);
      Toast("上传成功！")
      this.$router.push({name:'用户页'})
     }).catch(function(error) {
      alert(error)
      Toast("上传失败QAQ!")
     });
      this.$ls.set("data",{
      user_name:this.user_name,
      user_detail:this.detail
     });
     this.$ls.set("user_info",{
      user_id:this.$ls.get("user_info").user_id,
      user_name:this.user_name
     })
      },
      afterRead(file) {
      // 此时可以自行将文件上传至服务器
      var formData=new FormData();
      formData.append('file',file.file);
      this.$pic({
      method: 'post',
      url: '/api/reg',
      headers: {
       "content-type": "multipart/form-data"
      },
      data:formData,
      params:{
        option:1,
        id:this.$ls.get("user_info").id
      }
     }).then((response) => {
      console.log(response);
      console(this.$ls.get("user_info").id);
     }).catch(function(error) {
     })
     console.log(formData);
    },
    }
  }
</script>
<style lang="less" scoped>
  @import '../../assets/fz.less';
    .header {
      width: 100%;
      height: 25vw;
      background: rgb(185, 244, 255);
      background-size: auto 100%;
      padding: 3.2vw 0;
      .header-icon {
        border: .4vw solid #ffffff;
        background-color: @cl;
        margin-left:auto;
        margin-right:auto;
        width: 20vw;
        height: 20vw;
        line-height: 16vw;
        text-align: center;
        border-radius: 50%;
      }
      .header-info {
        margin-left:auto;
        margin-right:auto;
        color: #000000;
        letter-spacing: .2vw;
        text-align: center;
      }
    }
    .my-info{
        width: 100%;
        .mt();
        .bd();
        .bt();
        >a {
          background-color: #fff;
          display: block;
          width: 100%;
          border-bottom:1px solid;
          display: -ms-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 10vw;
          -webkit-box-align: center;
              -ms-flex-align: center;
                  align-items: center;
          -webkit-box-pack: justify;
              -ms-flex-pack: justify;
                  justify-content: space-between;
          padding: 0 6vw;
          -webkit-box-sizing: border-box;
                  box-sizing: border-box;
          &:active {
            background-color: rgb(224, 227, 230);
          }
          >div {
            -ms-flex: 2;
            -webkit-box-flex: 2;
                    flex: 2;
                    padding-top: 1.3vw;
          }
          >img{
            width: 7%;
          }

          >p {
            -ms-flex: 10;
            -webkit-box-flex: 10;
                    flex: 10;
            position: relative;

            &:active {
              background-color: rgb(224, 227, 230);
            }

            i {
              position: absolute;
              right: 0;
              top: .4vw;
            }
          }
        }
        .el-select .el-input {
        border-color: #409EFF;
        width: 200px;
    }
      }
  </style>