 let headOne1 = document.querySelector('h1')
 console.log(headOne1)

 headOne1.addEventListener('click',function(){
     headOne1.style.color = "purple"
 })

// program 2

 let headOne2 = document.querySelector('h1')
 console.log(headOne2)
 let addButton2 = document.querySelector('button')
 console.log(addButton2)

 addButton2.addEventListener('click',function(){
     headOne2.style.color = "purple"
 })

// program 3
 let headOne = document.querySelector('h1')
 console.log(headOne)

 let addButton = document.querySelector('button')
 console.log(addButton)

 let inputText = document.querySelector('input')
 console.log(inputText)

addButton.addEventListener('click',function(){
         let text = inputText.value 
     headOne.style.color = text
    inputText.value = ""
 })