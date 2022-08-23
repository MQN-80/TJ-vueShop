
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
  <div class="header-icon">
  </div>
  <div class="header-info">点击更换头像</div>
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
  label="用户性别"
  v-model="user_gender"
  input-align="right"
  input="onChange_chest_length"
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
  <van-cell bindtap="saveData" title=" " value="点此保存数据" is-link />
</van-cell-group>
</div>
</div>
</template>
<script>
export default {
    data() {
      return {
          user_name: '陈柯羲',
          user_gender: '男',
          user_desc: '该用户没有介绍'
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      goback(){
          this.$router.go(-1);//返回上一页
      } 
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