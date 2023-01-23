let amol ={
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    skills:["paython","css"]
}
let sarika ={
    firstName:"sarika",
    lastName:"pansare",
    age:45,
    skills:["paython3","html"]
}

//100 object---400
//template-----objects

class person{
    firstName= undefined
    lastName= undefined
    age= undefined
    skills= undefined
}

let poorva =new person()
console.log(poorva)

//updating the value outside the class

poorva.firstName="poorva"
poorva.lastName="vyas"
poorva.age=23
poorva.skills=["html","css","javascript"]
console.log(poorva)

//updating or setting the value at the time of object creation

class personC {
    constructor(fn,ln,ag,sl){
        this.firstName =fn
        this.lastName =ln
        this.age =ag
        this.skills =sl
    }
}

let amolA = new
personC("amol","rao",23,["paython","java","javascript"])
let sumit = new
personC("sumit","thakur",27,["paython","java","tableau"])
console.log(amolA)
console.log(sumit)

let names =["chinmay","poorva"]
let firstName ="chinmay"
