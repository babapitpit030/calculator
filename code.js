
let output = document.querySelector(".output");

let num1 = null;
let num2 = null;
let operator = null;


let AC = document.querySelector(".AC");
let sign_flip = document.querySelector(".sign-flip");
let procent = document.querySelector(".procent");
let divide = document.querySelector(".divide");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let product = document.querySelector(".product");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let substract = document.querySelector(".substract");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let add = document.querySelector(".add");
let zero = document.querySelector(".zero");
let decimals = document.querySelector(".decimals");
let equal = document.querySelector(".equal");


one.addEventListener("click", () => output_display("1"));
two.addEventListener("click", () => output_display("2"));
three.addEventListener("click", () => output_display("3"));
four.addEventListener("click", () => output_display("4"));
five.addEventListener("click", () => output_display("5"));
six.addEventListener("click", () => output_display("6"));
seven.addEventListener("click", () => output_display("7"));
eight.addEventListener("click", () => output_display("8"));
nine.addEventListener("click", () => output_display("9"));
zero.addEventListener("click", () => output_display("0"));

function output_display(value) {

    const operators = ["+", "-", "*", "/"];

    if (output.textContent.length === 16) {
        return;  // Do nothing if the length is 13
    }

    if (output.textContent.length === 15 && operators.includes(value)) {
        return;  // Do nothing if the length is 12 and operator is pressed
    }

    if ((operators.includes(value) && operators.includes(output.textContent.slice(-1))) ||
        (operators.includes(value) && output.textContent === "")) {
        return; // Do nothing if trying to input consecutive operators
    }

    if ((num1 != null && num2 != null && operator != null) &&
         operators.includes(value)) {
            
        output.textContent = execute(num1,operator,num2);
        num1 = execute(num1,operator,num2);
        num2 = null
        operator = null 
    }

    if (!operators.includes(value)) {
        if (operator === null) {
            // We're still entering num1
            if (num1 === null) {
                num1 = value;
            } else {
                num1 += value; // Append digit to num1
            }
        } else {
            // We're entering num2
            if (num2 === null) {
                num2 = value;
            } else {
                num2 += value; // Append digit to num2
            }
        }
    } else {
        // If the value is an operator and we haven't set one yet, set the operator
        if (operator === null) {
            operator = value;
        }
    }

    output.textContent += value;

}

function execute(num1, operator, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Error";
    }
}

add.addEventListener("click", () => output_display("+"));
substract.addEventListener("click", () => output_display("-"));
product.addEventListener("click", () => output_display("*"));
divide.addEventListener("click", () => output_display("/"));


AC.addEventListener("click", () => {
    output.textContent = "";
    num1 = null
    num2 = null
    operator = null
});

sign_flip.addEventListener("click", () => {


    if (output.textContent.length === 16) {
        return;  // Do nothing if the length is already 13
    }


    if (output.textContent !== "0") {
        output.textContent = output.textContent.startsWith("-") ?
            output.textContent.slice(1) : "-" + output.textContent;
        
        currentValue *= -1
    }

    console.log(currentValue)
});


procent.addEventListener("click", () => {
    if (output.textContent.length <= 13) {
        let result = String(parseFloat(output.textContent) / 100);
        if (result.length <= 16) {
            output.textContent = String(parseFloat(output.textContent) / 100);
        } else {
            return;
        }
        return;  // Do nothing if the length is already 13
    }
    
});

equal.addEventListener("click", () => {

    if (num1 != null && num2 != null && operator != null) {
        output.textContent = execute(num1,operator,num2);
        num1 = execute(num1,operator,num2);
        num2 = null
        operator = null
    }


})

