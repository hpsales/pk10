<template>
  <div class="m-header">
    <div class="info">
      <div class="left">
        <div>距 <span class="issue">62235</span>期开奖仅有</div>
        <div class="time"><span>03</span>分<span>15</span>秒</div>
      </div>
      <div class="right">
        <div class="username">{{username}}</div>
        <div><span>元宝 :</span><span class="money">300</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {setCookies, getCookies} from '../../common/js/cookie'

  export default {
    data () {
      return {
        username: ''
      }
    },
    mounted () {
      this.username = getCookies('username')
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .m-header
    width: 100%
    position: relative
    left: 0
    top: 0
    z-index: 3
    height: 80px
    line-height: 40px
    box-sizing: border-box
    padding-left: 10px
    font-size: 12
    background: $color-background
    color: $color-text
    .info
      width: 100%
      box-sizing border-box
      .left
        float: left
        height: 80px
        width: 50%
        font-size: 12px
        text-align: left
        .issue
          font-size: $font-size-large
        .time
          span
            display: inline-block
            width: 30px
            height: 30px
            line-height: 30px
            text-align: center
            color: $color-text
            background: #333
            margin: 0 10px
      .right
        float: left
        width: 50%
        height: 80px
        .username
          height: 40px
        .money
          font-size: $font-size-large
          margin:0 10px


</style>