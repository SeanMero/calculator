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
let num1 = "";
let num2 = "";
let operator = "";

const operate = function(num1, num2, operator) {
    if (operator == "+") {
        return add(num1, num2);
    } else if (operator == "-") {
        return subtract (num1, num2);
    } else if (operator == "*") {
        return multiply (num1, num2);
    } else if (operator == "/") {
        return divide (num1, num2);
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
        displayBox.textContent = truncate(showDisplay);
    });
});

//round answer if too long
truncate = function(num) {
    let numArray = num.toString().split("");
    let bye = numArray.length - 7;
    if (numArray.length > 8) {
        if (Number(numArray[8]) < 5) {
            numArray.splice(8, bye, "...")
        } else {
            num[7] += 1;
            numArray.splice(8, bye, "...")
        }
        return numArray.join("");
    } else {return num}
};

//store showDisplay as num1 when user presses "+-*/", or do math if user presses more operators instead of "="
const opCollection = document.getElementsByClassName("operator");
const opArray = Array.from(opCollection);

opArray.forEach(element => {
    element.addEventListener("click", function(e) {
        if (operator === "") {
            num1 = Number(showDisplay);
            display = [];
            operator = e.target.textContent;
        } else {
            num2 = Number(showDisplay);
            display = [];
            showDisplay = operate(num1, num2, operator);
            displayBox.textContent = truncate(showDisplay);
            num1 = Number(showDisplay);
            num2 = "";
            operator = e.target.textContent;
        }
    });
});

//store showDisplay as num2 and do math when user presses "=", and then reset variables
doMath = document.getElementById("equal");
doMath.addEventListener("click", function(e) {
    if (operator === "") {
        displayBox.textContent = truncate(showDisplay);
    } else {
    num2 = Number(showDisplay);
    display = [];
    showDisplay = operate(num1, num2, operator);
    displayBox.textContent = truncate(showDisplay);
    num1 = "";
    num2 = "";
    operator = "";
    }
});