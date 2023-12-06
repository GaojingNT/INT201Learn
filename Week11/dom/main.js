const rootnode = document
console.log(rootnode)
console.log(rootnode.nodeName) //document       
console.log(rootnode.nodeType) //9
console.log(rootnode.nodeValue)//null

console.log(document.documentElement)//htmlElement
console.log(document.documentElement.nodeName)//HTML
console.log(document.documentElement.nodeType)//1
console.log(document.documentElement.nodeValue)//null

console.log(document.body)//body element
console.log(document.body.nodeName)//body
console.log(document.body.nodeType)//1
console.log(document.body.nodeValue)///null

console.log(document.head) //head element
console.log(document.head.nodeName)//head
console.log(document.head.nodeType)//1
console.log(document.head.nodeValue)//null

console.log(document.title)//head element
console.log(document.title.nodeName) //undefined
console.log(document.title.nodeType)//undefined
console.log(document.title.nodeValue)//undefined

const headElement = document.head
console.log(headElement)

//1 child relationship
//children(node list data type) = query children all node type

const headChildren = headElement.childNodes
console.log(headChildren)

headChildren.forEach((hc) =>{
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
}
)
//2  children (Html colection data types ) = query chidren with element type only
// ถ้าใช้children  จะquery ที่เป็นelement  = title , meta
console.log('length: ' , headElement.children.length)
Array.from(headElement.children).forEach((hc)=> {
    console.log(hc.nodeName)
    console.log(hc.nodeType)
    console.log(hc.nodeValue)
})
// parent relationship
//get parent including all node type
const headParentNode  = headElement.parentNode
//get parent only element node
const headParentElement = headElement.parentElement
console.log(headParentNode)
console.log(headParentElement)

// sibling relatition 
const headPreviousSibling = headElement.previousSibling
//get previous sibling including all node types
console.log(headPreviousSibling)

const headPreviousSiblingElement = headElement.previousElementSibling
//get previous sibling including only element  node types

console.log(headPreviousSiblingElement)

// get next sibling include all node type 
const headNextSibling = headElement.nextSibling
console.log(headNextSibling)

//get all sibling only element node types 
const headNextSiblingElement = headElement.nextElementSibling
console.log(headNextSiblingElement)