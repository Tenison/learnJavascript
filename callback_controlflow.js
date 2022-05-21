//OUTPUTS
//watch sequence of callbacks 
console.log("ONE")

callbackDemo("osei", (value) =>{
    console.log(value)
    //doAnythingFunction() //control of flow
})

//watch sequence 
console.log("TWO")

callbackFunc(10, (value)=>{
    seqFunc(value)
})

//watch sequence 
console.log("THREE")



//--------------------------------------------------


//------ Callback examples ONE
function callbackDemo(input, callback){
    //perform some action with input
    input = "My name is " + input
    //callback here.. basically a function that runs in another function without specifing theinput during creation
    callback(input);
}
/////// ends here


//------- Callback examples TWO
function seqFunc(arg) {
    console.log(`the result of the sum is ${arg}`)
}


function callbackFunc(changeNumber, callback){
    changeNumber += 1

    callback(changeNumber)
}
/////// ends here


