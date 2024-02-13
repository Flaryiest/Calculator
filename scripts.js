const display = document.querySelector(".display");
const zero = document.querySelector(".numberZero");
const one = document.querySelector(".numberOne");
const two = document.querySelector(".numberTwo");
const three = document.querySelector(".numberThree");
const four = document.querySelector(".numberFour");
const five = document.querySelector(".numberFive");
const six = document.querySelector(".numberSix");
const seven = document.querySelector(".numberSeven");
const eight = document.querySelector(".numberEight");
const nine = document.querySelector(".numberNine");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const equal = document.querySelector(".equal")
display.textContent = "";

zero.addEventListener("click", function() {currentEquation(0)} );
one.addEventListener("click", function() {currentEquation(1)} );
two.addEventListener("click", function() {currentEquation(2)} );
three.addEventListener("click", function() {currentEquation(3)} );
four.addEventListener("click", function() {currentEquation(4)} );
five.addEventListener("click", function() {currentEquation(5)} );
six.addEventListener("click", function() {currentEquation(6)} );
seven.addEventListener("click", function() {currentEquation(7)} );
eight.addEventListener("click", function() {currentEquation(8)} );
nine.addEventListener("click", function() {currentEquation(9)} );
add.addEventListener("click", function() {currentEquation("+")} );
subtract.addEventListener("click", function() {currentEquation("-")});
multiply.addEventListener("click", function() {currentEquation("*")});
divide.addEventListener("click", function() {currentEquation("/")});
equal.addEventListener("click", function() { console.log(evaluate(display.textContent))})
function currentEquation(number) {
    number = number.toString();
    display.textContent = display.textContent + number
}

function evaluate(equation) {
    let equationInOrder = []
    let currentValue = null
    for (value in equation) {
        if (Number.isInteger(parseInt(equation[value]))) {
            console.log(equation[value], "add numbers")
            if (currentValue === null) {
                currentValue = equation[value]
            }
            else {
                currentValue += equation[value].toString();
                Number(currentValue)
            }
        
        }
        else  {
            
            equationInOrder.push(currentValue)
            equationInOrder.push(equation[value])
            currentValue = null
        }
    }
    if (!(currentValue === null)) {
        equationInOrder.push(currentValue)
    }
    return equationInOrder
}


