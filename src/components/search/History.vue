<template>
<!-- 历史记录与热门搜索组件，用于完成这两个功能 -->
  <div>
    <!-- 历史记录布局 -->
    <div class="his">
        <div class="hd">
            <!-- 历史记录需要在本地存储 -->
            <h4>历史记录</h4>
            <van-icon name="delete"
            @click="deleteHistory"/>
        </div>
        <div>
            <van-tag plain type="default"
            v-for="(item,index) in this.$store.state.category.history" 
            :key="index">
              {{item}}
            </van-tag>
            <van-tag plain type="default">标签</van-tag>
        </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { onMounted } from 'vue';

export default {
     data(){
        return{
            history_list:[]
        }
     },
     props:["HistoryList"],
    methods:{
        deleteHistory(){
        this.$store.commit('change_history','');
        }
    },
    mounted() {

    }
}
</script>

<style lang="less" scoped>
.his{
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