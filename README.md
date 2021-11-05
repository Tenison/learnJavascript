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

```javascript
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

__Function declarations load before any code is executed while Function expressions load only when the interpreter reaches that line of code.__

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

* Arrow Function 

_Basic form_

```javascript
    //An Arrow Function Expression is a shorter syntax for writing function expressions
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