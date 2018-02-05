<template>
  <div class="home">
    <div class="result">
      <h5>第 <strong>65525</strong>期开奖结果 ：</h5>
      <ol class="num" ref="num">
        <li :class="{ 'num-list': true }" v-for="(item, index) in numArr">{{item}}</li>
      </ol>
      <div class="draw draw1">
        <p>龙虎榜</p>
        <div class="draw-list">
          <span>龙</span>
          <span>龙</span>
          <span>龙</span>
          <span>龙</span>
          <span>龙</span>
        </div>
      </div>
      <div class="draw">
        <p>冠亚和</p>
        <div class="draw-list">
          <span>10</span>
          <span>双</span>
          <span>小</span>
        </div>
      </div>
    </div>

    <div class="account">
      <div class="wrapper" ref="wrapper">
        <div class="content" ref="listView">
        </div>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {showArticle, getPkData} from 'api/bet'
  import Bus from 'common/js/bus'

  export default {
    data () {
      return {
        acc: 'lei',
        article: [],
        count: 1,
        tips: '下拉刷新',
        isShowAlert: false,
        numArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        colorArr: ['#E6DE00', '#0092DD', '#4B4B4B', '#FF7600', '#17E2E5', '#5234FF', '#BFBFBF', '#FF2600', '#780B00', '#07BF00']
      }
    },
    created () {
      console.log('create home page')
    },
    mounted () {
      console.log(99968886666666775569)
      this._setColor()
    },
    methods: {
      _loadData () {
        showArticle().then((res) => {
          this.article = res.data.reverse()
          console.log(this.article)
          this.$nextTick(() => {
            if (!this.scroll) {
              this.scroll = new BScroll(this.$refs.wrapper, {probeType: 1, click: true})
              this.scroll.on('touchEnd', (pos) => {
                if (pos.y > 50) {
                  this.tips = '释放立即刷新'
                  var timer = setTimeout(() => {
                    this._loadData()
                    this.tips = '下拉刷新'
                    this._refreshAlert()
                  }, 500)
                }
              })
            } else {
              this.scroll.refresh()
            }
          })
        })
      },
      _refreshAlert () {
        this.isShowAlert = true
        setTimeout(() => {
          this.isShowAlert = false
        }, 1000)
      },
      inPageDetail(key, item) {
        this.$router.push({
          path: `/daily/${key}`
        })
        Bus.$emit('record', item)
      },
      _setColor () {
        var colorArr = ['#E6DE00', '#0092DD', '#4B4B4B', '#FF7600', '#17E2E5', '#5234FF', '#BFBFBF', '#FF2600', '#780B00', '#07BF00']
        var aOl = this.$refs.num
        var oLi = aOl.getElementsByTagName('li')
        for (var k = 0, len = oLi.length; k < len; k++) {
          var index = oLi[k].innerHTML - 1
          oLi[k].style.background = colorArr[index]
        }
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">

  .result
    width: 100%
    height: 120px
    color: #fff
    position: absolute
    left: 0
    top: 80px
    z-index 99
    background: #af86a3
    box-sizing border-box
    padding: 5px 10px 0
    h5
      margin: 0
      padding: 0
      height: 20px
      line-height: 20px
      text-align: left
    ol.num
      width: 100%
      height: 40px
      margin: 0
      padding: 0 2%
      display: flex
      box-sizing border-box
      .num-list
        display: inline-block
        float: left
        flex: 1
        line-height: 30px
        margin: 5px
        color #fff
        font-weight: bold
        border-radius: 3px
        background: #D9563D
    .draw
      width: 40%
      float: left
      line-height: 24px
      border: 1px solid #ddd
      .draw-list
        display: flex
        border-top: 1px solid #ddd
        span
          display: inline-block
          flex: 1
          border-right: 1px solid #ddd
          background: rgba(255, 255, 255, .19)
          &:last-child
            border-right: none
    .draw1
      margin-right: 5%
      width: 50%

   .account
    .wrapper
      position: fixed;
      z-index: 1;
      top: 200px;
      bottom: 0;
      left: 0;
      width: 100%;
      overflow: hidden;
      .content
        .alert
          width: 100%
          height: 40px
          line-height: 40px
          position: absolute
          left: 0
          top: 0
          background: rgba(25, 0, 0, 0.5)
          color: #fff
        .top-tip
          position: absolute;
          top: -40px;
          left: 0;
          z-index: 1;
          width: 100%;
          height: 40px;
          line-height: 40px;
          text-align: center;
          color: #555
        .list
          width: 100%
          box-sizing border-box
          border: 1px solid #ddd
          box-shadow #eee 5px 5px inset
          p.title
            font-size: 14px
            text-indent: 2em
            text-align: left
          p.info
            margin: 0
            padding: 0
            line-height: 24px
            font-size: 12px
            text-align: left
            color: #666
            background: #eee
            span
              margin-left: 20px
</style>