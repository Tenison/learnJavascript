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


//Promise.resolve()
//Promise.resolve creates a new promise without "new Promise and then" syntex. But acts in the same way
//You can pass a promise or non-promise. Promise.resolve will unwap till it reaches a value that can be extracted to make a new promise. 
//if you pass a non-Promise thenable value to Promise.resolve(..) , it will attempt to unwrap that
//value, and the unwrapping will keep going until a concrete final non-Promise-like value is extracted
/*
**Promise.resolve(..) will accept any thenable, and will unwrap it to its non-thenable value. But you get back from
Promise.resolve(..) a real, genuine Promise in its place, one that you can trust. If what you passed in is already a
genuine Promise, you just get it right back, so there's no downside at all to filtering through Promise.resolve(..) to gain
trust.**
*/

//Syntex
Promise.resolve( p )
.then(
    function fulfilled(val){},function rejected(err){}
);

//Example 1
// p1 and p2 are the same
var p1 = new Promise( function(resolve,reject){
    resolve( 42 );
 } );

var p2 = Promise.resolve( 42 );

//Therefore !!!! NOTE
var p1 = Promise.resolve( 42 );
var p2 = Promise.resolve( p1 );// Unwarped Promise//until we get a real value, in this case '42'  from p1
p1 === p2; // true

//Example 2
//Assume foo() is some function

// don't do this:
foo( 42 )
.then( function(v){
console.log( v );
} );
// instead, do this:
Promise.resolve( foo( 42 ) )
.then( function(v){
console.log( v );
} );

//Example 3
