<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content" ref="listView">
        <div class="top-tip">
          <span class="refresh-hook">{{tips}}</span>
        </div>
        <div v-if="isShowAlert" class="alert">刷新成功</div>
        <div v-if="recordList.length">
          <div class="list" @click="inPageDetail(key, item)"  v-for="(item, key) in recordList">
            <p><span>旗号：{{item.issue}} -- {{item.lottery}}</span> <span>盈亏：{{item.profit}}</span>   </p>
            <p> <span>详情：{{item.detail}}</span> <span>余额：{{item.money}}</span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import {getRecord} from 'api/bet'
  import Bus from 'common/js/bus'

  export default {
    data () {
      return {
        acc: 'lei',
        recordList: [],
        count: 1,
        tips: '下拉刷新',
        isShowAlert: false
      }
    },
    created () {
      this._loadData()
    },
    mounted () {
      this.username = 'superX'
    },
    methods: {
      _loadData () {
        getRecord().then((res) => {
          this.recordList = res
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
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  .wrapper
    position: fixed;
    z-index: 1;
    top: 80px;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    overflow: hidden;
    .content
      background: #fff
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
        padding 10px
        border: 1px solid #ddd
        height: 50px
        font-size: 12px
        text-align left
        p
          line-height: 18px
          display: flex
          span
            flex 1
            margin-left: 10px
</style>