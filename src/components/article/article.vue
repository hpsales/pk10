<template>
  <div class="wrapper">
    <el-form label-width="80px">
      <el-form-item label="文章标题">
        <el-input v-model="title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="context" spellcheck="false"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="push">立即发布</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
  import {addArticle, checkAccount} from 'api/article'

  export default {
    data () {
      return {
        title: '',
        context: ''
      }
    },
    methods: {
      push () {
        let article = {
          title: this.title,
          context: this.context,
          time: this.getNowFormatDate()
        }
        addArticle(article).then((res) => {
          console.log(res)
          this.title = ''
          this.context = ''
        })
      },
      getNowFormatDate() {
        var date = new Date()
        var seperator1 = '-'
        var seperator2 = ':'
        var month = date.getMonth() + 1
        var strDate = date.getDate()
        if (month >= 1 && month <= 9) {
          month = '0' + month
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = '0' + strDate
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + ' ' + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds()
        return currentdate
      }
    }
  }
</script>

<style scope lang="stylus" rel="stylesheet/stylus">
  .wrapper
    margin-top: 20px
    overflow: hidden


</style>