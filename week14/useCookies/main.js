import {CookieUtil} from './myLib/cookieUtil.js'
document.cookie ="username = natdanai"
document.cookie ="course = INT201"
document.cookie ="credit = 3"
document.cookie ="credit = 2"
 const currentCookies = document.cookie
console.log(currentCookies)
console.log(CookieUtil.get('course'))


