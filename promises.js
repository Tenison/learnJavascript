//Promises Basics

//Revealling Constructor Partten
//
//let exmp = new Promise(promise <=> function)
let exmp = new Promise((resolve, reject) =>{
    //some logic
    //logic can either result in a success or error
    //if success call resolve() || if error or failure call reject()
    let logic = true
    if(logic)
        resolve()
    else
        reject("value error!!!")
})

//exmp.then(function <=> resolve event , function <=> rehect event)
exmp.then(
    //control of flow using jobs(js job)
    ()=>{
        console.log("Promise success, do something after success!!!")
    },
    (error)=>{
        console.log(error)
    }
)

