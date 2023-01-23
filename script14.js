let students =[
{
    fullName:"chinmay Deshpande",
    age:32,
    skills:["paython","java"],
    city:"pune"
},
{
    fullName:"sarika pansare",
    age:24,
    skill:["paython","java"],
    city:"sangamner"
},
{
    fullName:"amol rao",
    age:33,
    skills:["sql"],
    city:"nagpur"
}
]
console.log(students[2].age)
console.log(students[2]['age'])

let a=[11,22,33]

//print all fullname

students.forEach(function(el){
    console.log(el.fullName)
})

//print city for all students
students.forEach(function(el){
    console.log(el.city)
})

//add country to all students
students.forEach(function(el){
    el.country="india"
})
console.log(students)



//average age of all students

let h=[1,2,3]
let b1=students.reduce(function(acc,el){
    return el.age+acc
},0)
console.log(b1/students.length)


//count skills for every students
chinmay:3
students.forEach(function(el){
    console.log(el.fullName+":"+el.skills.length)
})
