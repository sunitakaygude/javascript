// selection of elements 


// on user action create element 
// append the element to ol list

let olList = document.querySelector('ol')
let inputText = document.querySelector('input')
let buttonElement = document.querySelector('button')

console.log(olList)
console.log(inputText)
console.log(buttonElement)

buttonElement.addEventListener('click',function(){
    let newFruit = inputText.value
    let newElement = document.createElement('li') 
    newElement.textContent = newFruit 
    olList.appendChild(newElement)
})



