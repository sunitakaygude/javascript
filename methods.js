
   //program 4(paython skills and pune city)
   students.forEach(function(el){
    if(el.skills.includes('paython') && el.city==='pune'){
        console.log(el.fullName)
    }
})


//program 6(add Excel skills to all users)
students.forEach(function(el){
    el.skills.push('Excel')
})
console.log(students)
file script15.js madhale program 4 ahe