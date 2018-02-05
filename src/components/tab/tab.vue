<template>
  <div class="tab-wrapper">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/home">
        <span class="tab-link">首页</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/bet">
        <span class="tab-link">投注</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/record">
      <span class="tab-link">记录
      </span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/contact">
        <span class="tab-link">联系</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab-wrapper
    width: 100%
    position: fixed
    bottom: 0
    left: 0
    z-index: 3
  .tab
    display: flex
    height: 50px
    line-height: 50px
    background: $color-background
    color: #fff
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>