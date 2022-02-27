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
### Powers and Remainder

* `%`: The remainder operator is used to find the remainder of a division performed.

  ```javascript
  40 % 4; // => 0
  -11 % 4; // => -3
  ```

* `**`: The exponentiation operator is used to raise a number to a power.

  ```javascript
  4 ** 3; // => 64
  4 ** 1 / 2; // => 2
  3 ** 2; // => 9
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
    console.log(Math.round(amount)); //round to nearest integer "216"
    console.log(Math.floor(amount)); // round downward "215"
    onsole.log(Math.ceil(amount)); // round upward "215"
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
__Function declarations vs Function expressions__ :
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

## Node JS VS Vanilla JavaScript

#### Vanilla JavaScript (FrontEnd) is used in the browser and helps a developer manipulate the DOM. JS libraries are bundled functions that help us write code easier. Example: jquery

#### Node JS (Backend) is a JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

### KEY FEATURES OF BOTH
* __Single Thread__ : JS uses only a single Thread to perform task, therefore performs one instruction after another. If an instruction is too big or takes a long time to complete causes JS to behave in a __blocking__ mannar. __Callback__ functions are used to solve JS's __blocking__ nature.
* __Asynchronous__ : JavaScript by default is a single-threaded programming language which means only one thing can happen at a time. ... That's where asynchronous JavaScript comes into play. Using asynchronous JavaScript (such as callbacks, promises, and async/await), you can perform long network requests without blocking the main thread.
* __Non Blocking__ : JS uses concepts like callbacks to make applications non blocking. Example: when you make an API call to a server in a program, JS passes the function to the event loop(Thread Pool) while performing other functions on the main call stack. This is done with the help of asynchronous JavaScript (such as callbacks, promises, and async/await). When the API call retruns, the results is placed on the event loop(Task Queue) until the main call stack is free. Then the results is run by the main call stack.

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


## Node JS VS Vanilla JavaScript

<table>
  <tr>
    <th>Node</th>
    <th>JavaScript</th>
  </tr>
  <tr>
    <td>Gobal Variables/Objects (setTimeout, setInterval, __direname, __filename, require, module)</td>
    <td>Window Objects (document, setTimeout, setInterval) (window)</td>
  </tr>
    <tr>
    <td>Process</td>
    <td>Document Object (DOM, querySelector, )</td>
  </tr>
    <tr>
    <td>Server Side Apps</td>
    <td>Client Side JS (Frontend Apps)   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
  </tr>
    <tr>
    <td>Filesystem (fs)</td>
    <td>No Filesystem</td>
  </tr>
    <tr>
    <td>Node Modules (os, path, filesystem)</td>
    <td>ES6 Modules</td>
  </tr>
</table>

##
__Things to Know about NODE__

##
__Commonly used NODE modules__
```diff
! os - useful methods about system OS and user
- path - information about different paths.Creating filepaths [Useful to application] 
+ fs - working with files(reading and writing)
```
##

__Gobal Variables/Objects__

__Example : setTimeout, setInterval, direname, filename, require, module.__

* __direname provides absolute path for the directory name of the current module.
* __filename file name of the current module.

```node
    console.log(__filename);
    // Prints: /Users/mjr/example.js
    console.log(__dirname);
    // Prints: /Users/mjr
```

_setTimeout_

```node
    //Say Hello after three seconds
    function sayHi() {
      alert('Hello');
    }

    setTimeout(sayHi, 3000);
```
_setInterval_

```node
    //shows the message every 2 seconds. After 5 seconds, the output is stopped

    // repeat with the interval of 2 seconds
    let timerId = setInterval(() => alert('tick'), 2000);

    // after 5 seconds stop
    setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);
```

__Node Export module using common.js__
* __common.js was included natively in node.js. Therefore common.js comes as part of the node framework/runtime environment.__

* __common.js helps us use features like require() to include modules, Example below :__

_file1.js exports some functions and varibles to file2.js_

_file1.js_

```node
    const timeOfDay = 'morning'

    const greet = (name) => {
        return `How are you doing, ${who}!`
    }

    //can export functions, const, let, var, etc.
    module.exports = {
        timeOfDay,
        greet
    }
```
_file2.js_

```node
    //using destruction here, but you can also use a const/variable and the dot notation to access the values exported
    const {timeOfDay, greet} = require('./file1')

    console.log(`Hey!, Good ${timeOfDay}`)
    console.log(greet("Tenison"))
```

### OR

_file1.js_

```node
    //To export a variable
    exports.temp = "Hold any thing"

    const timeOfDay = 'morning'

    exports.greet = (name) => {
        return `How are you doing, ${who}!`
    }

    //needed in order to export a constant
    module.exports.timeOfDay = timeOfDay
```
_file2.js_

```node
    //using the const/variable and the dot notation to access the values exported
    const holdImports = require('./file1')

    console.log(`Hey!, Good ${holdImports.timeOfDay}`)
    console.log(holdImports.greet("Tenison"))
```
