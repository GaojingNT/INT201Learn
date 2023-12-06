//1. select target HTML object
const submitButton = document.querySelector('button')
 console.log(submitButton)
// 2 register handler function on a target HtML object
const doSomething = (e) => {
  console.log('submit button is clicked') //submit button is clicked
  console.log(e)
  console.log(e.target)// <button>Submit</button>
  console.log(e.target.id)// btn-001
  console.log(e.type) //click
  console.log(e.currentTarget)//// <button>Submit</button>
  console.log(e.eventPhase) //2 2 is targetnode 
  console.log(e.target.nodeName)//button
} 
submitButton.addEventListener('click', doSomething)
// -----------------------
// inner-div
const innerDiv = document.getElementById('inner-div')
console.log(innerDiv) 
innerDiv.addEventListener('click', (event) => {
  console.log(event.target.id)//btn-001
  console.log(event.currentTarget)
  console.log(event.eventPhase) //3 
})
//outer-div
const outerDiv = document.getElementById('outer-div')
// console.log(outerDiv)
outerDiv.addEventListener('click', (event) => {
  console.log(event.target.id)
  console.log(event.currentTarget)
  console.log(event.eventPhase)
})