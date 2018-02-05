<template>
  <div>
    <bet-page></bet-page>
    <div class="bet-area">
      <div class="left">
        <p>已选中 <strong>{{sum}}</strong> 注</p>
        <el-input placeholder="请输入每注金额"></el-input>
      </div>
      <div class="right">
        <el-button type="primary"  class="btn">下注</el-button>
        <el-button type="warning" class="btn">重置</el-button>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import BetPage from 'components/bet-page/bet-page'

  export default {
    data () {
      return {
        sum: 0
      }
    },
    components: {
      BetPage
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .bet-area
    background: #ccc
    width 100%
    height: 80px
    position: fixed
    left: 0
    bottom: 50px
    display: flex
    .left
      width 50%
      flex 1
      p
        line-height: 30px
        strong
          color yellow
          font-weight: bold
    .right
      flex 1
      .btn
        margin-top: 30px
        margin-left: 10px



</style>