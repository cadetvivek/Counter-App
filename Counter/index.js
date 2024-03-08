const minusBtn =document.querySelector('.minus-btn')
const plusBtn =document.querySelector('.plus-btn')
const count = document.querySelector('.count')
const changeBy = document.querySelector('.changeBy')
const ResetBtn = document.querySelector('.Reset-btn')

plusBtn.addEventListener('click',()=>{
    let countValue = parseInt(count.innerText)
    let changeByValue = parseInt(changeBy.value)
    count.innerText=countValue+changeByValue
})

minusBtn.addEventListener('click',()=>{
    let countValue = parseInt(count.innerText)
    let changeByValue = parseInt(changeBy.value)
    count.innerText=countValue-changeByValue
   
})

ResetBtn.addEventListener('click',()=>{
    count.innerText=0
})