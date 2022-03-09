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
