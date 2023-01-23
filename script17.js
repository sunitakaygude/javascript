let a ="chinmay"
console.log(a)
let b ="shirish"
console.log(b)
let c ="deshpande"
console.log(c)

//number + number ===>number
//string + number ===>string
//number + string  ===>sting
//string + string ===>string

let a1=10
let a2=20
let a3="hello"

console.log(a1+a2+a3)
console.log(a1+a3+a2)
console.log(a3+a1+a2)

//string stores the value by index

let firstName ="chinmay"
console.log(firstName[0])
console.log(firstName[1])

//string---object
//object property and method
//method - action and return type

let city ="pune"
console.log(city[0])
console.log(city.length)

for(let i=0; i<4; i++){
    console.log(i)
    console.log(city[i])
}

let city2 ="nagpur"
for(let i=0; i<city2.length; i++){
    console.log(i)
    console.log(city2[i])
}


//string object---property and method

//property
let city3 ="mumbai"
console.log(city3.length)

//methods
//toUpperCase()
let city4 ="Bhopal"
let c4 =city4.toUpperCase()
console.log(c4)
//toLowerCase()
let c5=city4.toLowerCase()
console.log(c5)


//indexOF()
let city6 ="wardha"
let c6 =city6.indexOf('d')
console.log(c6)
let c7 =city.indexOf('H')
console.log(c7)

//includes()
let city7 ="goa"
let c8 =city7.includes('o')
console.log(c8)

//startsWith()
let city8 ="indore"
let c9 =city8.startsWith('i')
console.log(c9)

//endsWith()
c10 =city8.endsWith('re')
console.log(c10)
