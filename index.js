let result = document.querySelector('.result')
let number = document.querySelectorAll('.number')
let func = document.querySelectorAll('.func')
let clear = document.querySelector('.clear')
let backspace = document.querySelector('.backspace')
let equal = document.querySelector('.equal')
let percentage = document.querySelector('.percentage')


let x = 0

number.forEach((element)=>{
   
    element.addEventListener('click', ()=>{
        if(x == 1){
            result.value = ""
            x = 0
        }
        result.value += element.innerText
    })
})
func.forEach((element)=>{
    element.addEventListener('click', ()=>{
        x = 0
        result.value += element.innerText
    })
})

clear.addEventListener('click', ()=>{
    result.value = ""
})
backspace.addEventListener('click', ()=>{
    result.value = result.value.slice(0,-1)
})
percentage.addEventListener('click', ()=>{
    result.value = result.value / 100
    x = 1
})


equal.addEventListener('click', ()=>{
    x = 1
    result.value = eval(result.value)
    console.log(x);
    
})