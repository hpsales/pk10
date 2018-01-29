<template>
  <div>
    <h1>分类详情</h1>
    <p>{{id}}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        id: 'dsd'
      }
    },
    created () {
      this.id = this.$route.query.hello
    }
  }
</script>