import axios from 'axios'

export function getPkData(date) {
  var url = 'https://www.cp222567.com/data/bjpk10/lotteryList/'+ '2018-01-29' +'?'+new Date().getTime()
  axios.get(url).then((res) => {
    console.log(res)
  })
}

export function addArticle(data) {
  var url = 'api/bet/addArticle'
  console.log(data)
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res)
  })
}

export function showArticle() {
  var url = 'api/bet/showArticle'
  return axios.get(url).then((res) => {
    return Promise.resolve(res)
  })
}

export function getRecord() {
  console.log(3333)
  var recordList = [
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'},
    {'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'}

  ]
  recordList.unshift({'issue': '006555','lottery': '12345678910','profit': '122','money': '26666','detail': '冠 大 32元'})
  return  Promise.resolve(recordList)
}