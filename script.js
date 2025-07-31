const clear = document.getElementById("clear");
const display = document.getElementById("result");
const deleteBtn = document.getElementById("delete");
const percent = document.getElementById("percent");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const subtract = document.getElementById("subtract");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const add = document.getElementById("add");
const zero = document.getElementById("zero");
const decimal = document.getElementById("decimal");
const equals = document.getElementById("equals");

const buttons = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".color");
let num1 = 0;
let num2 = 0;
let response = 0;
function getOperator(operator) {
    switch (operator.id) {
        case "add":
            return '+'
            break;
        case "subtract":
            return '-';
            break;
        case "multiply":
            return '*';
            break;
        case "divide":
            return '/';
            break;
        default:
            break;
    }
}


buttons.forEach(button => {
    button.addEventListener("click", () => {
        display.value += button.textContent;
    });
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        // display.value += operator.textContent;
        operator.classList.add("active");
        setTimeout(() => {
            operator.classList.remove("active");
        }, 1000);
        getOperator(operator);
        num1 = display.value;
        display.value = "";
    });
   
});
clear.addEventListener("click", () => {
    display.value = "";
});

deleteBtn.addEventListener("click", () => {
    display.value = display.value.slice(0, -2);
});
percent.addEventListener("click", () => {
    display.value = parseFloat(display.value) / 100;
});

equals.addEventListener("click", () => {
    num2 = display.value;
    calculate();
    num1 = 0;
    num2 = 0;
    display.value = response;
})

function calculate() {
   response =  parseInt(num1) + parseInt(num2);
   return response;

}
