<template>
<div>
<el-page-header style="height:7vw" @back="goback" content="订阅店铺">
</el-page-header>
  <el-table
    :data="tableData"
    stripe
    border
    style="width: 100%">
    <el-table-column
      label="店铺名称"
      width="180">
      <template slot-scope="scope">
        <img :src="icon_money"/>
        <el-tag size="medium">{{ scope.row.name }}</el-tag>
      </template>
    </el-table-column>
     <el-table-column
      label="添加日期"
      width="100">
      <template slot-scope="scope">
        <span>{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">查看</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          name: '王小虎',
          date: '2016-05-02',
          address: ''
        }, {
          name: '王小虎',
          date: '2016-05-04',
          address: ''
        }, {
          name: '王小虎',
          date: '2016-05-01',
          address: ''
        }, {
          name: '王小虎',
          date: '2016-05-03',
          address: ''
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      goback(){
          this.$router.go(-1);//返回上一页
      } 
    }
  }
</script>

<style>
</style>