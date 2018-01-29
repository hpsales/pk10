export function setCookies(name, value) {
  var days = 30
  var exp = new Date()
  exp.setTime(exp.getTime() + days * 24 * 60 * 1000)
  document.cookie = name + '=' + escape(value) + exp.toGMTString()
}

export function getCookies(name) {
  if (document.cookie.length > 0) {
    var start = document.cookie.indexOf(name + '=')
    if (start !== -1) {
      start = start + name.length + 1
      var end = document.cookie.indexOf(';', start)
      if (end === -1) {
        end = document.cookie.length
      } else {
        return unescape(document.cookie.substring(start, end))
      }
    }
  } else {
    return ''
  }
}

export function delCookie(name) {
  var exp = new Date()
  exp.setTime(exp.getTime() - 1)
  var cval = getCookies(name)
  if (cval != null) {
    document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString()
  }
}