//basic maths functions
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

//collect inputs and decide what math to do when the user presses "="
//let num1 = ;
//let num2 = ;
//let operator = ;

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

//collect number button presses and display them as one multi-digit number in the display
let display = [];
let showDisplay = 0;
const displayBox = document.getElementById("display");
const numCollection = document.getElementsByClassName("number");
const numArray = Array.from(numCollection);

numArray.forEach(element => {
    element.addEventListener("click", function(e) {
        display.push(e.target.textContent);
        showDisplay = display.join("");
        displayBox.textContent = showDisplay;
    });
});