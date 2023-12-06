//1 common JS
// const {echo, MAX_VALUE} = require('./libs/utils.js')
// console.log(echo('practice make perfect '))//practice make perfect
// console.log(sum(1,5,5))
// console.log(MAX_VALUE) //100

//2 Es MOdule
// import { sum }  from './libs/utils.js'
// console.log(sum(1,5,4))

//3 default Export + name export {echo,MAX_VALUE}}
import sum ,{echo,MAX_VALUE}  from './libs/utils.mjs'
console.log(sum(1,5,4))
console.log(MAX_VALUE)