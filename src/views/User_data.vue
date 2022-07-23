
<template lang="html">
<div>
<div class="header">
  <div class="header-icon">
  </div>
  <div class="header-info">点击更换头像</div>
</div>
<div class="my-info">
  <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="用户昵称">
     <el-col :span="18">
    <el-input v-model="form.name"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item label="用户性别">
    <el-select style="width:75%" v-model="form.gender" placeholder="请选择性别">
    <el-option label="男" value="male"></el-option>
    <el-option label="女" value="female"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="用户介绍">
    <el-col :span="18">
    <el-input type="textarea" v-model="form.desc"></el-input>
    </el-col>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即保存</el-button>
    <el-button>取消</el-button>
  </el-form-item>
  </el-form>
</div>
</div>
</template>
<script>
export default {
    data() {
      return {
        form: {
          name: '',
          gender: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style lang="less" scoped>
  @import '../assets/fz.less';
    .header {
      width: 100%;
      height: 25vw;
      background: rgb(185, 244, 255);
      background-size: auto 100%;
      padding: 3.2vw 0;
      border-radius: 5%;
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
          display: -ms-flex;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          height: 15vw;
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