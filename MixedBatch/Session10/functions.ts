function Addition(number1: number, number2: number): number {
    console.log("The sum is: " + (number1 + number2));
    return number1 + number2;
}

let result = Addition(5, 10);

let resultHeading = document.createElement("h2");
resultHeading.textContent = `Result of Addition: ${result}`;
document.body.appendChild(resultHeading);

// Arrow Function
// () => {}

// Anonymous Function
() => {
    let anonymousHeading = document.createElement("h1");
    anonymousHeading.textContent = `Anonymous Function called and bind the data`;
    document.body.appendChild(anonymousHeading);
}

let renderFunction = () => {
    let anonymousHeading = document.createElement("h1");
    anonymousHeading.textContent = `renderFunction: Anonymous Function called and bind the data`;
    document.body.appendChild(anonymousHeading);
}

renderFunction();

// Function with Parameters
// let variableName: (parameters...)
// => returnType =
// (parameters...) => {
// Function body
//}

let multiplication: (number1: number, number2: number)
=> number =
(number1: number, number2: number) => {
   return number1 * number2;
}

let mulResult = multiplication(5, 4);

let mulResultHeading = document.createElement("h2");
mulResultHeading.textContent = `Result of Multiplication: ${mulResult}`;
document.body.appendChild(mulResultHeading);

// Function with Default Parameters
function calculateDiscount(price: number, discountPer: number = 15): number {
    let discount = (price * discountPer)/100;
    let finalPrice = price - discount;
    return finalPrice;
}

let discountedPrice = calculateDiscount(1000);
let discountHeading = document.createElement("h2");
discountHeading.textContent = `Discounted Price is: ${discountedPrice}`;
document.body.appendChild(discountHeading);

let discountedPrice1 = calculateDiscount(1000, 20);
let discountHeading1 = document.createElement("h2");
discountHeading1.textContent = `Discounted Price is: ${discountedPrice1}`;
document.body.appendChild(discountHeading1);