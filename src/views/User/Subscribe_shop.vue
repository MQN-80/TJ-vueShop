<template>
<div>
<van-nav-bar
  title="订阅店铺"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="goback"
  @click-right="onClickRight"
/>
<van-cell-group>
  <div v-for="shop in tableData" :key="shop.name">
 <van-cell title="URL 跳转" size="large" is-link url="">
  <template #title>
    <span>{{shop.name}}</span>
    <van-tag type="danger">标签</van-tag>
  </template>
 <template #label>
   <span>添加时间：{{shop.date}}</span>
 </template>
</van-cell>
 <van-divider />
</div>
</van-cell-group>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '万代',
          date: '2016-05-02',
          address: ''
        }, {
          name: '寿屋',
          date: '2016-05-04',
          address: ''
        }, {
          name: '御模道',
          date: '2016-05-01',
          address: ''
        }, {
          name: 'GSC',
          date: '2016-05-03',
          address: ''
        }],
        shop_table:this.$ls.get(this.$route.params.id+"subscribe")
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      onEdit() {
      Toast('编辑');
    },
      goback(){
          this.$router.go(-1);//返回上一页
      } 
    }
  }
</script>

<style>
</style>