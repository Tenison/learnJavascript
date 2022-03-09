//write call function here

const callbackExample = (input, callback) =>{
    ///just an example of an action 
    let temp = input

    //callback here.. basically a function that runs in another function without specifing theinput during creation
    callback(temp);
}

callbackExample("My nameis osei", (input) =>{
    console.log(input);
})


/////// Callback examples 
function funcOne(arg) {
    console.log(`the result of the sum is ${arg}`)
}

function funcTwo(firstNumber, secondNumber, callback){
    callback(firstNumber + secondNumber)
}

funcTwo(10, 40, funcOne)


//--------------------------------------------------

// function
function greet(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}

// callback function
function callMe() {
    console.log('I am callback function');
}

// passing function as an argument
greet('Peter', callMe);