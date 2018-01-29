<template>
  <div class="detail">
    <h1>{{article.title}}</h1>
    <span class="time">{{article.time}}</span>
    <div class="context">{{article.context}}</div>
    <span>{{$route.params.id}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import Bus from 'common/js/bus'

  export default {
    data () {
      return {
        article: {}
      }
    },
    created () {
      Bus.$on('articleDetail', (res) => {
        console.log(res)
        this.article = res
        sessionStorage.setItem('articleData', res)
      })
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  .detail
    h1
      font-size: 24px
      padding: 20px
    .time
      color: #666666
      font-size: 12px
      float: right
      margin-right: 10px
    .context
      padding: 20px 10px

</style>