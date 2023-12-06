// local storage
// let counter  = localStorage.getItem('count')
// if(counter ===null ) {
//     counter =1 
// localStorage.setItem('count',1 )
// }else localStorage.setItem('count',++counter)
// alert(`counter=${counter}`)
import {CookieUtil} from '../useCookies/myLib/cookieUtil.js'
// sessionStorage
let counter = sessionStorage.getItem('count')
if (counter === null) {
  counter = 1
  sessionStorage.setItem('count', counter)
} else sessionStorage.setItem('count', ++counter)
alert(`counter=${counter}`)

sessionStorage.removeItem('count')
sessionStorage.clear() //all items removed 