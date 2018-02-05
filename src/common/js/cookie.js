export function setCookies(name, value) {
  var Days = 30
  var exp = new Date()
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString()
}

export function getCookies(name) {
  var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)")
  return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null
}

export function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookie(name)
  if (cval != null) {
    document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString()
  }
}