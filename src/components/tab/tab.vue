<template>
  <div class="tab-wrapper">
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/daily">
        <span class="tab-link">日志</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/article">
        <span class="tab-link">文章</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/classify">
      <span class="tab-link">分类
      </span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/about">
        <span class="tab-link">关于</span>
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
    position: relative
    top: 0
    left: 0
    z-index: 3
  .tab
    display: flex
    height: 44px
    line-height: 44px
    background: salmon
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