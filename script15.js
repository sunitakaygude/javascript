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
    },
    {
        fullName:"poorva vyas",
        age:29,
        skills:["sql","angular","javascript"],
        city:"ujjain"
    },
    {
        fullName:"Mahesh",
        age:24,
        skills:["sql","angular","paython3"],
        city:"pune"
    }
    ]

    //name of user above 30
    let q1=students.filter(function(el){
        return el.age>30
    })
    console.log(q1)
    q1.forEach(element=>{
        console.log(element.fullName)
    });

//program1 above >30 of fullName
    students.forEach(function(el){
        if(el.age>30){
            console.log(el.fullName)
        }
    })


    //program 3 (age above 30 and paython)
    students.forEach(function(el){
        if(el.age>30 && el.skills.includes('paython')){
            console.log(el.fullName)
        }
    })

    

    
    //program 5(add country="India")
    students.forEach(function(el){
        el.country="India"
    })
    console.log(students)



    //program 7(average age of all students)
    let r1 = students.reduce(function(acc,el){
        return acc +el.age
    },0)
    console.log(r1/students.length)