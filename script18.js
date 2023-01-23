let firstName ="chinmay"
let firstName2 ='poorva'
let firstName3 ='sarika'

console.log(firstName)
console.log(firstName2)
console.log(firstName3)

//string + string ===> string
//number + string ===> string
//string + number ===> string
//number  + number ===>number 

//string store the value by index

let city ='pune'
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

//string...object....object properties and method
console.log(city.length)

//print all characters of string
for(let i=0 ; i<city.length; i++){
    console.log(i)
    console.log(city.length)
}

//methods

let city2="pune"
let q1=city2.toUpperCase()
console.log(q1)

let city3="Bhopal"
let q2=city3.toLowerCase()
console.log(q2)

//method chaining
let city4="Wardha"
let q3=city4.toUpperCase().toLowerCase().length
console.log(city)

let q4=city4.includes('W')
console.log(q4)
let q5=city4.includes('War')
console.log(q5)

//startsWith() character and substring

let city5 ="Nagpur"
let q6=city5.startsWith('N')
let q7=city5.startsWith('Nag')
console.log(q6)
console.log(q7)

//endWith() character and substring

let q8=city5.endsWith('r')
let q9=city5.endsWith('pur')
console.log(q8)
console.log(q9)

//indexOf()
let city6="jaipur"
let q11=city6.indexOf('i')
let q12=city6.indexOf('I')
console.log(q11)
console.log(q12)

//trim()
let city7=" sagar "
console.log(city7.length)
let q13=city7.trim()
console.log(q13)

//trimStart()
let city8=" sagar"
console.log(city8.length)
let q14=city8.trimStart()
console.log(q14.length)

//trimEnd()
let city9=" sagar "
console.log(city9.length)
let q15=city9.trimEnd()
console.log(q15.length)

//charAt()
let city10="jaipur"
let q16=city10.charAt(5)
console.log(q16)

//slice()
let city11="chandrapur"
console.log(city11.slice(3))
console.log(city11.slice(-7))
console.log(city11.slice(1,-7))
console.log(city11.slice(1,7))
console.log(city11.slice(-10,-2))
console.log(city11.slice(-10,8))
console.log(city11.slice(-1,-7))

//regular expression

//1) let and const
//2)arithemtic
//3)function
//4)comparison operators
//5)logical operators
//6)conditional statements(switch case)
//7)loops