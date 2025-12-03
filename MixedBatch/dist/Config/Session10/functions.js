function Addition(number1, number2) {
    console.log("The sum is: " + (number1 + number2));
    return number1 + number2;
}
var result = Addition(5, 10);
var resultHeading = document.createElement("h2");
resultHeading.textContent = "Result of Addition: ".concat(result);
document.body.appendChild(resultHeading);
// Arrow Function
// () => {}
// Anonymous Function
(function () {
    var anonymousHeading = document.createElement("h1");
    anonymousHeading.textContent = "Anonymous Function called and bind the data";
    document.body.appendChild(anonymousHeading);
});
var renderFunction = function () {
    var anonymousHeading = document.createElement("h1");
    anonymousHeading.textContent = "renderFunction: Anonymous Function called and bind the data";
    document.body.appendChild(anonymousHeading);
};
renderFunction();
// Function with Parameters
// let variableName: (parameters...)
// => returnType =
// (parameters...) => {
// Function body
//}
var multiplication = function (number1, number2) {
    return number1 * number2;
};
var mulResult = multiplication(5, 4);
var mulResultHeading = document.createElement("h2");
mulResultHeading.textContent = "Result of Multiplication: ".concat(mulResult);
document.body.appendChild(mulResultHeading);
// Function with Default Parameters
function calculateDiscount(price, discountPer) {
    if (discountPer === void 0) { discountPer = 15; }
    var discount = (price * discountPer) / 100;
    var finalPrice = price - discount;
    return finalPrice;
}
var discountedPrice = calculateDiscount(1000);
var discountHeading = document.createElement("h2");
discountHeading.textContent = "Discounted Price is: ".concat(discountedPrice);
document.body.appendChild(discountHeading);
var discountedPrice1 = calculateDiscount(1000, 20);
var discountHeading1 = document.createElement("h2");
discountHeading1.textContent = "Discounted Price is: ".concat(discountedPrice1);
document.body.appendChild(discountHeading1);
