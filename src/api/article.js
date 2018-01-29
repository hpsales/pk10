import axios from 'axios'

export function addArticle(data) {
  var url = 'api/article/addArticle'
  console.log(data)
  return axios.post(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res)
  })
}

export function showArticle() {
  var url = 'api/article/showArticle'
  return axios.get(url).then((res) => {
    return Promise.resolve(res)
  })
}