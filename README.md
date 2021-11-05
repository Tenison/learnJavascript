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

__if else__

##
### Loops

__while loop__

__do while loops__