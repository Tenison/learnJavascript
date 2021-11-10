# learnJavascript

### Truthy and Falsy

* The Following evaluates to False

```javascript
    let emptyString  = ""

    //  empty strings evaluate to false
    if(emptyString){
        console.log("Not Empty")
    }else{
        console.log("Empty String")
    }

    let number  = 0

    //Any number apart from zero (0) evaluates to true
    if(number){
        console.log("Number is True")
    }else{
        console.log("Number is Zero and evaluates to false")
    }
```

##
### Formatting Values

* Int casting

```javascriptgit 
    //Parsing 
    parseInt('32px')    //32
    parseInt('4')       //4

    //Convert Type
    Number('32px')      //NaN
    Number('4')         //4

    alert()
```

* Rounding Numbers

```javascript
    let amount = 215.9784;

    console.log(amount); // 215.9784
    console.log(amount.toFixed(2)); // "215.98"
```

* String casting

```javascript
    const value = 12345

    // Concat Empty String
    value + ''

    // Template Strings
    `${value}`

    // JSON.stringify
    JSON.stringify(value)

    // toString()
    value.toString()
    
    // String()
    String(value)
```
##
### Simple Output

```javascript
    console.log()

    alert()
```
##
### Simple Input

```javascript
    let age  = prompt("Pleae enter your age : ")
```
##
### Accessing Object properties

```javascript
    obj = {
        Name : "Osei",
        Age : 5
    }

    console.log(obj.Name)

    //OR

    console.log(obj["Age"])
    
```

##
### conditions

* __if else statments__

##
### Loops

* __while loops__

* __do while loops__

* __for loops__


##
### Functions

* Function Declaration 

```javascript
    function greet(who) {
        return `Hello, ${who}!`
    }
```

* Function expression 

```javascript
    //A Function Expressions defines a named or anonymous function
    const greet = function(who) {
        return `Hello, ${who}`
    }
```
##
__Function declarations vs Function expressions__
__Function declarations load before any code is executed (HOISTING) while Function expressions load only when the interpreter reaches that line of code.__

_Hoisting refers to the availability of functions and variables “at the top” of your code_
##

* Arrow Function 

__An Arrow Function Expression is a shorter syntax for writing function expressions__

_Basic form_

```javascript
    const greet = (who) => {
        return `Hello, ${who}!`
    }
```
_Arrow function with no parenthesis_

```javascript
    const greet = who => `Hello, ${who}!`
```
_Arrow function with default values_

```javascript
    const multiply = (a = 2, b = 3, c = 1) => a * b * c;

    multiply(2, 2, 2); // 8, calculation = 2*2*2
    multiply(2, 2);    // 4, calculation = 2*2*1
    multiply(3);       // 9, calculation = 3*3*1
    multiply();        // 6, calculation = 2*3*1
```
__JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined__


### ||||||||||||||||||||||||||||||||||||||||
### ||||||||||||||||||||||||||||||||||||||||
## Node JS VS Vanilla JavaScript

#### Vanilla JavaScript (FrontEnd) is used in the browser and helps a developer manipulate the DOM. JS libraries are bundled functions that help us write code easier. Example: jquery

#### Node JS (Backend) is a JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

### KEY FEATURES OF BOTH
* __Single Thread__ JS uses only a single Thread to perform task, therefore performs one instruction after another. If an instruction is too big or takes a long time to complete causes JS to behave in a __blocking__ mannar. __Callback__ functions are used to solve JS's __blocking__ nature.
* __Asynchronous__ JavaScript is a single-threaded programming language which means only one thing can happen at a time. ... That's where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.
* __Non Blocking__ JS uses concepts like callbacks to make applications non blocking. Example: when you make an API call to a server in a program, JS passes the function to the event loop(Thread Pool) while performing other functions on the main call stack. This is done with the help of asynchronous JavaScript (such as callbacks, promises, and async/await). When the API call retruns, the results is placed on the event loop(Task Queue) until the main call stack is free. Then the results is run by the main call stack.

_Callback Example_

``` javascript
    function doThisThing(theseArgs) {
        setTimeout(function (theseArgs) { doThatOtherThing(theseArgs); }, 1000);
        alert('hello world');
    }
```

### Event Loop
* __Vanilla JavaScript :__ Call Stack -> Web API's -> Task Queue
* __Node JS :__ Call Stack/Event Queue -> C++ Thread Pool -> Task Queue

### Where Node Shines 
* __Event-Driven Apps__
* __Data-Intensive (I/O)__
* __Web Servers__  
* __Rest API__ 


