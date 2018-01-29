<template>
  <div>
    <div class="wrapper" ref="wrapper">
      <div class="content" ref="listView">
        <div class="top-tip">
          <span class="refresh-hook">{{tips}}</span>
        </div>
        <div v-if="isShowAlert" class="alert">刷新成功</div>
        <div v-if="article.length">
          <div class="list" @click="inPageDetail(key, item)"  v-for="(item, key) in article">
            <p class="title">{{item.context}}</p>
            <p class="info"><span>发表时间：{{item.time}}</span> <span>评论数：10 条</span> <span>{{key}}</span></p>
          </div>
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
  import {showArticle} from 'api/article'
  import Bus from 'common/js/bus'

  export default {
    data () {
      return {
        acc: 'lei',
        article: [],
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
        showArticle().then((res) => {
          this.article = res.data.reverse()
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
        Bus.$emit('articleDetail', item)
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