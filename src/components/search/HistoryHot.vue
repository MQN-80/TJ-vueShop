<template>
<!-- 历史记录与热门搜索组件，用于完成这两个功能 -->
  <div>
    <div class="his-hot" v-show="showHistory">
        <div class="hd">
            <h4>历史记录</h4>
            <van-icon name="delete" 
            @click="clearHistory"/>
        </div>
    <div class="bd">
        <!-- <van-tag v-for="(item,index) in HistoryData" :key="index" plain type="default">{{item.keyword}}</van-tag> -->
        <van-tag plain type="default">标签</van-tag>
    </div>
    </div>

     <div class="his-hot">
        <div class="hd">
            <h4>热门搜索</h4>
        </div>
    <div class="bd">
        <!-- <van-tag v-for="(item,index) in HotData" :key="index" plain type="default">{{item.keyword}}</van-tag> -->
        <van-tag plain type="default">标签</van-tag>
    </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';

// import {ClearHistory} from "@/request/api"
export default {
     data(){
        return{
            showHistory:true
        }
     },

     props:["HistoryData","HotData"],
     methods:{
        clearHistory(){
        this.clearHistory().then(res=>{
            if(res.errno==0){
                // console.log(res);
                this.$toast.success("删除成功");
                setTimeout(()=>{
                    //隐藏历史记录
                this.showHistory=false;
                },1000)       
            }
        })
        }
     }
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