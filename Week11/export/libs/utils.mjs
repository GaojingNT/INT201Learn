 function echo(msg){
    return msg
 }
function sum(...nums){
    let total = 0
    for (const  num of nums){
    total += num
    }
    return total
 }
 const MAX_VALUE = 100
 //common JS

//  module.exports= {echo,sum,MAX_VALUE}
//  console.log(sum(1,3,4,5))

//ES module
// export const MAX_VALUES = 100//

// export that good 
//3 Export list
// export {sum,echo,MAX_VALUE}//

//default Export + name export {echo,MAX_VALUE}}
export{sum as default,echo,MAX_VALUE}