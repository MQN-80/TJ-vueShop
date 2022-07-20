<template lang="html">
<div class="header">
  <div class="header-icon">
  </div>
  <span>点击更换头像</span>
</div>
</template>

<style lang="less" scoped>
  @import '../assets/fz.less';
    .header {
      width: 100%;
      height: 25vw;
      background: url(../../static/carbg.png) center 0 rgb(185, 244, 255);
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
      >span {
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display:flex;
        flex-wrap: wrap;
        color: #ffffff;
        letter-spacing: .2vw;
        text-align: center;
        flex-wrap: wrap;
      }
    }
  </style>