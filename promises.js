//Promises Basics

//Revealling Constructor Partten
//
//new Promise() function runs right now in sync mode!!! NOTE !!!
//let exmp = new Promise(promise <=> function)
let exmp = new Promise((resolve, reject) =>{
    //some logic
    //logic can either result in a success or error
    //if successful, call resolve() || if error or failure call reject()
    let logic = true
    if(logic)
        resolve()
    else
        reject("value error!!!")//default return promise event value : undefined if no real error occurs
})

//(async) callback functions are always passed into .then, therefore .then always run async in "event-loop"!!! NOTE !!!
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

//Example 2 : Better syntex and passing value through resolve function
//simple example
let exmp2 = new Promise((resolve, reject) => {
    //do some addition
    let someSentence = "Hey there"

    //intentional error
    //foo()

    resolve(someSentence)
})

exmp2.then((message) =>{
    console.log(message + ", Osei")
},
(err) =>{
    console.log(err)
})

//Example 3
//
//let exmp2 = new Promise(promise <=> function)
let exmp3 = new Promise((resolve, reject) =>{
    //some logic
    console.log("-----------------------------------")

    //intentional error
    //this error stops the execution process and JUMPS straight to the reject promise event!!!
    foo.bar()

    //will only be executed if no error occurs before is point
    resolve()
})

//exmp2.then(function <=> resolve event , function <=> reject event)
exmp3.then(
    //control of flow using jobs(js job)
    ()=>{
        console.log("Promise success, do something after success!!!")
    },
    (error)=>{
        console.log("Error :" + error)
    }
)