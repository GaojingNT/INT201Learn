const programmingLect  = document.querySelectorAll('.programming')
//nodelist
console.log(programmingLect)
programmingLect.forEach((p1) => {
    console.log(p1)
    console.log(p1.nodeName)
    console.log(p1.nodetype)///undefined
    console.log(p1.nodeValue)//null
    console.log(p1.attributes)//nameNodemap
    Array.from(p1.attributes).forEach((attr)=> console.log(attr))
})

const pEle = document.getElementById('p-01')
console.log(pEle)
const pEleAttributes = pEle.attributes
console.log(pEleAttributes)
console.log(pEleAttributes.length)
Array.from(pEleAttributes).forEach((attr) => {
  console.log(attr.name)
  console.log(attr.value)
})
console.log(pEle.getAttribute('id'))
const ulEle = document.getElementsByTagName('ul')
console.log(ulEle.length)
//return HTMLCollection -array-like, not implement forEach
const ulEleArray = Array.from(ulEle)
ulEleArray.forEach((ul) => console.log(ul))