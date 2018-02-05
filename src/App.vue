<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/reset"


  #app
    width: 100%
    height: 100%
    background: url("../src/common/img/bg3.jpg") no-repeat center;
    background-size: 100% 100%
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
</style>
