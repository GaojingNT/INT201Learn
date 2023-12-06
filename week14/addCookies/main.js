import {CookieUtil} from '../useCookies/myLib/cookieUtil.js'

//addcookies
CookieUtil.set("username" ,'natdanai',new Date (2023,11,25))
CookieUtil.set("course" ,'INT201',new Date (2023,11,31))
CookieUtil.set("credit" ,'2',new Date (2024,0,1))


console.log(CookieUtil.get('username'))
console.log(CookieUtil.get('course'))
console.log(CookieUtil.get('credit'))

