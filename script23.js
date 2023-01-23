


//set

let setA =new set()
console.log(setA)


//property
let a1=setA.size
console.log(a1)

//methods

//add()
setA.add("chinmay")
setA.add("poorva")
setA.add("chinmay")
console.log(setA)

//has
let a2= setA.has("poorva")
let a3= setA.has("poorva")
console.log(a2)
console.log(a3)

//setA.clear()
console.log(setA)
setA.delete("poorva")
console.log(setA)

let setB= new set[22,33,44,55,66,77,66,77]
console.log(setB)
setB.forEach(function(e){
    console.log(e)
})


console.log(setB.entries())
console.log(setB.keys())
console.log(setB.values())
