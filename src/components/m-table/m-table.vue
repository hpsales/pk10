<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          prop="issue"
          label="期数"
          width="60">
      </el-table-column>
      <el-table-column
          prop="lottery"
          label="开奖"
          width="90">
      </el-table-column>
      <el-table-column
          prop="profit"
          label="盈亏"
          width="50">
      </el-table-column>
      <el-table-column
          prop="money"
          label="金钱"
          width="50">
      </el-table-column>
      <el-table-column
          prop="detail"
          label=" 详情">
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        tableData: [{
          issue: '0622256',
          lottery: '12345678910',
          profit: '206',
          money: '300',
          detail: '冠1 222'
        }, {
          issue: '0622256',
          lottery: '12345678910',
          profit: '206',
          money: '300',
          detail: '冠1 222'
        },{
          issue: '0622256',
          lottery: '12345678910',
          profit: '206',
          money: '300',
          detail: '冠1 222'
        },{
          issue: '0622256',
          lottery: '12345678910',
          profit: '206',
          money: '300',
          detail: '冠1 222'
        },{
          issue: '0622256',
          lottery: '12345678910',
          profit: '206',
          money: '300',
          detail: '冠1 222'
        },{
          issue: '0622256',
          lottery: '12345678910',
          profit: '206',
          money: '300',
          detail: '冠1 222'
        },{
          issue: '0622256',
          lottery: '12345678910',
          profit: '206',
          money: '300',
          detail: '冠1 222'
        }]
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .el-table
    width 100%
    background: #a3afa8
    box-sizing border-box
    th
      font-size: $font-size-medium
      padding: 8px 0
      text-align: center
    td
      font-size: $font-size-small
      padding: 6px 0
      text-align: center      
    .cell
      padding-right: 0


</style>