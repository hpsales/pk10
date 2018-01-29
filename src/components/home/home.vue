<template>
  <div>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

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