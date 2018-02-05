<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="两面" name="first">
      <div class="wrapper1" ref="wrapper1">
        <div class="content1">
          <div class="bet-wrapper" v-for="item in betData">
            <p class="title">{{item.title}}</p>
            <ul class="list">
              <li @click="toggle" v-for="content in item.list">{{content.name}} &nbsp; {{content.odds}}</li>
              <!--     <li><span class="name" >冠亚小</span> <span class="odds">1.98</span></li>
                   <li><span class="name" >冠亚单</span> <span class="odds">1.98</span></li>
                   <li><span class="name" >冠亚双</span> <span class="odds">1.98</span></li>-->
            </ul>
          </div>
        </div>
      </div>

    </el-tab-pane>
    <el-tab-pane label="冠亚和" name="second">

    </el-tab-pane>
    <el-tab-pane label="1-5名" name="third">
    </el-tab-pane>
    <el-tab-pane label="6-10名" name="fourth">
    </el-tab-pane>

  </el-tabs>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        activeName: 'first',
        counter: 0,
        betData: [
          {
            title: '冠亚和',
            list: [
              {name: '冠亚单', odds: '1.98'},
              {name: '冠亚双', odds: '1.98'},
              {name: '冠亚大', odds: '1.98'},
              {name: '冠亚小', odds: '1.98'}
            ]
          },
          {
            title: '冠军',
            list: [
              {name: '单', odds: '1.98'},
              {name: '双', odds: '1.98'},
              {name: '大', odds: '1.98'},
              {name: '小', odds: '1.98'},
              {name: '龙', odds: '1.98'},
              {name: '虎', odds: '1.98'}
            ]
          },
          {
            title: '季军',
            list: [
              {name: '单', odds: '1.98'},
              {name: '双', odds: '1.98'},
              {name: '大', odds: '1.98'},
              {name: '小', odds: '1.98'},
              {name: '龙', odds: '1.98'},
              {name: '虎', odds: '1.98'}
            ]
          },
          {
            title: '第四名',
            list: [
              {name: '单', odds: '1.98'},
              {name: '双', odds: '1.98'},
              {name: '大', odds: '1.98'},
              {name: '小', odds: '1.98'},
              {name: '龙', odds: '1.98'},
              {name: '虎', odds: '1.98'}
            ]
          },
          {
            title: '第五名',
            list: [
              {name: '单', odds: '1.98'},
              {name: '双', odds: '1.98'},
              {name: '大', odds: '1.98'},
              {name: '小', odds: '1.98'},
              {name: '龙', odds: '1.98'},
              {name: '虎', odds: '1.98'}
            ]
          },
          {
            title: '第六名',
            list: [
              {name: '单', odds: '1.98'},
              {name: '双', odds: '1.98'},
              {name: '大', odds: '1.98'},
              {name: '小', odds: '1.98'},
              {name: '龙', odds: '1.98'},
              {name: '虎', odds: '1.98'}
            ]
          },
          {
            title: '第七名',
            list: [
              {name: '单', odds: '1.98'},
              {name: '双', odds: '1.98'},
              {name: '大', odds: '1.98'},
              {name: '小', odds: '1.98'},
              {name: '龙', odds: '1.98'},
              {name: '虎', odds: '1.98'}
            ]
          },
          {
            title: '第八名',
            list: [
              {name: '单', odds: '1.98'},
              {name: '双', odds: '1.98'},
              {name: '大', odds: '1.98'},
              {name: '小', odds: '1.98'},
              {name: '龙', odds: '1.98'},
              {name: '虎', odds: '1.98'}
            ]
          },
          {
            title: '第九名',
            list: [
              {name: '单', odds: '1.98'},
              {name: '双', odds: '1.98'},
              {name: '大', odds: '1.98'},
              {name: '小', odds: '1.98'},
              {name: '龙', odds: '1.98'},
              {name: '虎', odds: '1.98'}
            ]
          }
        ]
      };
    },
    mounted () {
      this.betPage1()
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      betPage1 () {
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.wrapper1, {probeType: 1, click: true})
        })
      },
      toggle (e) {
        var dom = e.target
        if (dom.className === 'select') {
          dom.className = ''
          this.counter --
        } else {
          dom.className = 'select'
          this.counter ++
        }
        console.log(this.counter)
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .el-tabs__nav
    margin-left: 40px
    font-weight: 900

  .bet-wrapper
    width: 100%
    margin-bottom: 5px
    box-sizing border-box
    padding 0 10px 8px
    line-height: 36px
    font-size: 16px
    color #fff
    background: #844949
    border-bottom: 1px solid #000
    .title
      cursor none
    .list
      width 100%
      display: flex
      flex-wrap wrap
      li
        width 32%
        box-sizing border-box
        border: 1px solid #ddd
        border-radius 5px
        cursor pointer
        margin 0 2px
        &.select
          background: rgba(255, 0, 0, 0.2)
          color: #ffef42
        .odds
          font-size: 12px

  .wrapper1
    background: #000
    width 100%
    height 400px
</style>