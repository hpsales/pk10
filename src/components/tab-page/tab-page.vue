<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="充值" name="first">
      <div>
        <p style="margin-bottom: 20px;">扫描下面二维码 充值成功 会自动更新积分</p>
        <img src="./wx-pic.jpg" width="60%" alt="">
      </div>
    </el-tab-pane>
    <el-tab-pane label="充值明细" name="second">
      充值明细
    </el-tab-pane>
    <el-tab-pane label="提现" name="third">
      <p style="text-align: left;">请输入提现金额，提交以后，管理员确认以后系统会自动更新积分。</p>
      <div style="margin-top: 20px;">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="提现金额">
            <el-input  placeholder="请输入提现金额"></el-input>
          </el-form-item>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" >提交</el-button>
          </el-form-item>
        </el-form>
        <img src="./wx-pic.jpg" width="60%" alt="">
      </div>
    </el-tab-pane>
    <el-tab-pane label="提现明细" name="fourth">
      提现明细
    </el-tab-pane>
    <el-tab-pane label="联系客服" name="fifth">
      联系客服
    </el-tab-pane>
    <el-tab-pane label="规则" name="fifth">
      规则
    </el-tab-pane>
  </el-tabs>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"








</style>