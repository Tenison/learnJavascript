/**
 * unit testing for functions in .spec.js
 * 
 * @param a 
 * @param b 
 * @returns sum, subtract, divide
 */

const sum = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const divide = (a, b) => {
    return a / b
}

module.exports = {
    sum, 
    divide,
    subtract
}