//CRUD on any element node
//1. create element, <li></li>
const newLiEle = document.createElement('li')
console.log(newLiEle)
//2. create attribute <li class="devops name="devopsLect"></li>
newLiEle.setAttribute('class', 'devops')
newLiEle.setAttribute('name', 'devopsLect')
//3. add text value to element,
//<li class="devops name="devopsLect">Siam Yamsangsung</li>
newLiEle.innerHTML = '<span style="color:red">Siam Yamsangsung</span>'
//4. add new li element to a parent node
const divParent = document.querySelector('div.lecturers>ul')
console.log(divParent)
divParent.appendChild(newLiEle)// วางไว้nodeตัวสุดท้าย

const liEle = document.querySelectorAll('div.lecturers>ul>li');
console.log(liEle)
const refNode = liEle[1]
console.log(refNode)

// divParent.insertBefore(newLiEle,refNode) // แทรกระหว่างnode แทรกข้างหน้าก่อน1node
// divParent.replaceChild(newLiEle,refNode)//แทนทที่ืnode
// divParent.removeChild(refNode)