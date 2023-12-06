window.addEventListener('load', () => {
    document.body.style = `background-color:${localStorage.getItem('yourColor')}`
  })
  const colorInput = document.getElementById('color-input')
  colorInput.addEventListener('input', (e) => {
    console.log(e.target.value)
    document.body.style = `background-color:${e.target.value}`
    localStorage.setItem('yourColor', e.target.value)
  })
 
 
  window.addEventListener('load', () => {
    document.body.style.fontSize = `fond-size:${localStorage.getItem('yourFondSize')}`
})
const sizeInput = document.getElementById('size-input')
colorInput.addEventListener('input',(t)=>{
    console.log(t.target.value)
    document.body.style.fontSize = `fond-size${t.target.value}`
    localStorage.setItem('yourfond',t.target.value)
})