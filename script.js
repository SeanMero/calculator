const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

const divide = function(a, b) {
    return a / b;
};

let num1 = ;
let num2 = ;
let operator = ;

const operate = function(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2)
    } else if (operator == "-") {
        return subtract (num1, num2)
    } else if (operator == "*") {
        return multiply (num1, num2)
    } else if (operator == "/") {
        return divide (num1, num2)
    }
};