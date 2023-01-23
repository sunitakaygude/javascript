let chinmay={
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:44
}
let amol={
    firstName:"amol",
    lastName:"rao",
    age:34,
    rollNo:34
}

//retrive
console.log(amol.firstName)
//add
amol.city="pune"
//update 
amol.age=77
//delete
delete amol.rollNo

class person{
    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined
}
let poorva =new person()
let shraddha =new person()
console.log(poorva)
poorva.firstName ="poorva"
poorva.lastName ="vyas"
poorva.age =29
poorva.rollNo =45
console.log(poorva)
console.log(shraddha)


//using constructor

class personB{
    constructor(fn,ln,ag,rn){
        this.firstName = fn
        this.lastName =ln
        this.age =ag
        this.rollNo =rn
        }
}

let ram =new
personB("ram","dani",34,56)
let vijeet =new
personB("vijeet","Deshmukh",51,56)
vijeet.cityc="pune"
console.log(ram)
console.log(vijeet)
