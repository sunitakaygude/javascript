let amol ={
    firstName: "amol",
    lastName: "rao",
    lastName: ["paython","javascript","css","html"]
}

//your map key can be any datatype 
//number string boolean array
//userdefined

let mapA = new Map()
let names = ["chinmay","sarika"]
let na = "dani"


//property and method

//propert size
console.log(mapA)
let a1= mapA.size
console.log(a1)


//Method
//set

mapA.set(1, 'admin')
mapA.set("firstName", 'Ramesh')
mapA.set(true, 'isMarried')
console.log(mapA)
console.log(mapA.size)

//get
console.log(mapA.get(1))
console.log(mapA.get("firstName"))
console.log(mapA.get(true))

//delete
mapA.delete(1)
console.log(mapA)

//clear
mapA.clear()
console.log(mapA)

//size 
//set(),get(),delete(),clear()

let mapB =new Map([
    [1, "admin"],
    [2, "customer"],
    [3, "operation"]
])

console.log(mapB)
let a =mapB.has(1)
console.log(a)

mapB.forEach(function(el,key){
    console.log(el,key)
})
