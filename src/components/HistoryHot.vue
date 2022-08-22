<template>
  <div>
    <div class="his-hot">
        <div class="hd">
            <h4>历史记录</h4>
            <van-icon name="delete" />
        </div>
    <div class="bd">
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
    </div>
    </div>

     <div class="his-hot">
        <div class="hd">
            <h4>热门搜索</h4>
        </div>
    <div class="bd">
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
        <van-tag plain type="default">标签</van-tag>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.his-hot{
    background-color: #fff;
    padding: 0.1rem;
    margin-bottom: 0.9rem;
    .hd{
        display: flex;
        justify-content: space-between; 
        font-size: 0.50rem;
        h4{
            font-size:1rem;
        }
        margin-bottom:0.05rem;
    }

    .vant-tag{
        margin-right: 0.5rem;
        padding: 0.5rem;
    }
}
</style>