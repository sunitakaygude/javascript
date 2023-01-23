let lisT = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#one')

console.log(lisT)
console.log(inputText)
console.log(buttonA)

buttonA.addEventListener('click', function () {
    let text = inputText.value
    let newEl = document.createElement('li') 
    newEl.textContent = text 
    createButton(newEl)
    lisT.appendChild(newEl)
    inputText.value = " "
})

     // <li>Apple
       //  <button class = "remove">Remove</button>
         //<button class = "up">Up</button>
         //<button class = "down">Down</button>
     //</li>

function createButton(li){
    let r = document.createElement('button') 
    r.className = "remove" 
    r.textContent = "Remove" 
    li.appendChild(r)

    let u = document.createElement('button') 
    u.className = "up" 
    u.textContent = "Up" 
    li.appendChild(u)

    let d = document.createElement('button') 
    d.className = "down" 
    d.textContent = "Down" 
    li.appendChild(d)

}