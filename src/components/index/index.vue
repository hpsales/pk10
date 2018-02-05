<template>
  <div>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .result
    width: 100%
    height: 60px
    background: $color-background
    color: $color-text
    position: absolute
    left: 0
    top: 80px
    z-index: 99
    h6
      float: left
      line-height: 24px
      margin: 10px 0 0
      padding: 0

</style>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import tab from 'components/tab/tab'
  import {getCookies} from '../../common/js/cookie'

  export default {
    components: {
      MHeader,
      tab
    }
  }
</script>