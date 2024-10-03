
let output = document.querySelector(".output");

let currentOperator = null;
let previousValue = null;
let currentValue = "";


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

function output_display(value) {

    if (currentOperator != null) {
        output.textContent = ""
        currentOperator = null

    }

    if (output.textContent.length === 13) {
        return;  // Do nothing if the length is already 13
    }

    if (output.textContent === "0" ||
        output.textContent === "+" ||
        output.textContent === "÷" ||
        output.textContent === "×" ||
        output.textContent === "−"
    ) {
        output.textContent = value;
        currentValue = value;
    } else {
        output.textContent += value;
        if (value != null) {
            currentValue += value
        } else {
            currentValue = value
        }
    }

    console.log(currentValue)
}

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

AC.addEventListener("click", () => {
    output.textContent = "0";
});

sign_flip.addEventListener("click", () => {


    if (output.textContent.length === 13) {
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
    output.textContent = String(parseFloat(output.textContent) / 100);
});


function operation(operator) {

    previousValue = currentValue;
    currentOperator = operator;
    output.textContent = operator;

    console.log(previousValue)
    console.log(currentOperator)
    console.log(currentValue)


    return previousValue, currentOperator

}


add.addEventListener("click", () => operation("+"))
divide.addEventListener("click", () => operation("÷"))
product.addEventListener("click", () => operation("×"))
substract.addEventListener("click", () => operation("−"))





console.log(parseInt('1')+'/'+parseInt('2'))



