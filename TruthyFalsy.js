//Testing Truthy and False 

let my_name  = "" //"" = false

if(my_name){
    console.log(`Your name is ${my_name}`);
}else{
    console.log("Please assign your name to the my_name variable!!!")
}

//Any number apart from zero (0) evaluates to true
let number = 0 // 0 = false

if(number){
    console.log(`The number you entered is ${number}`);
}else{
    console.log("Please make number variable a non-zero value!!!")
}