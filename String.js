//A string is a list of charaters, and can be acessed via array indexs
let fineText = "Hello there"
console.log(fineText[0]); //H
//Last charater of a string
console.log(fineText[fineText.length - 1])
console.log(fineText.charAt(fineText.length - 1))


//trim() removes whitespace from both sides of a string
let text = "     Hello World!     "
let result = text.trim() //"Hello World!"


//Concat strings
let text1 = "sea "
let text2 = "food"
let result = text1.concat(text2) //sea food 
console.log(text1 + text2); //sea food


//slice() extracts a part of a string and returns the extracted part
let text3 = "Hello world!";
let result = text3.slice(0, 5); //Hello


//split() splits a string into an array of substrings, and returns the array
let text4 = "How are you doing today";
const myArray = text4.split(" "); //[How,are,you,doing,today]


//toLowerCase() converts a string to lowercase letters
let text5 = "Hello World!";
let result = text.toLowerCase(); //hello world!


//toUpperCase() converts a string to uppercase letters
let text6 = "Hello World!";
let result = text.toUpperCase(); //HELLO WORLD!

//endsWith() returns true if a string ends with a specified string, otherwise false
let text = "Hello world";
let result =  text.endsWith("world"); //true