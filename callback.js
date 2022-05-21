//OUTPUTS
//watch sequence of callbacks 
console.log("ONE");

callbackExample("My nameis osei", (value) =>{
    console.log(value);
    //watch sequence 
    console.log("TWO");

    funcTwo(10, 40, (input)=>{
        funcOne(input)
    })

    //watch sequence 
    console.log("THREE");
})




//--------------------------------------------------


/////// Callback examples ONE
function callbackExample (input, callback){
    ///just an example of an action 
    let temp = input

    //callback here.. basically a function that runs in another function without specifing theinput during creation
    callback(input);
}
/////// ends here


/////// Callback examples TWO
function funcOne(arg) {
    console.log(`the result of the sum is ${arg}`)
}

function funcTwo(firstNumber, secondNumber, callback){
    callback(firstNumber + secondNumber)
}
/////// ends here


