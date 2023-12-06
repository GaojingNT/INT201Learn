//select Node with it's id 
const ulStudents = document.getElementById('students')

console.log(ulStudents)//655000102,655000888
//select with first node css selector
const courseClass = document.querySelector('#students')//id selector
console.log(courseClass)////655000102,655000888

const programmingLect = document.querySelector('#int101','.programming','#655000102' ) //class selector '.'
console.log(programmingLect) //หาเจอnodeไหนอันแรก จะประกฎnodeนั้นตัวแรก 


const ulStudents3 = document.querySelector('ul[id = "students"]')// tag with attributes selector
console.log(ulStudents3)

const ulEle = document.querySelector('ul') //tag name
console.log(ulEle)
const divUl = document.querySelector('div>ul')
console.log(divUl)// tag with its parents

//correct, give one string selector
const firstNode1 = document.querySelector('#int101, .courses, #p-01')
console.log(firstNode1)
//incorrect, give more than one string selector
const firstNode2 = document.querySelector('#int101', '.courses', '#p-01')
console.log(firstNode2)