// function fnName(parameter1,.....parameterN): dataType {
//     // code
// }
function Add(num1, num2) {
    return num1 + num2;
}
var addition = Add(10, 50);
console.log("Addition: ".concat(addition));
function Message(userName) {
    var msg = "Welcome to TypeScript, ".concat(userName);
    console.log(msg);
}
Message("John Doe");
// variable as fun
// let add: (a: number, b: number) => number = (a: number, b: number) {
//     return a+b;
// }
// let funName: (a: number, b: number) => dataType = function (a: number, b: number) {
// }
var add1 = function (a, b) {
    return a + b;
};
var add = add1(10, 20);
console.log(add);
// some code
// some code ()=>{}
// some code
function multiplication(a, b, c) {
    if (typeof c !== "undefined") {
        return a * b * c;
    }
    return a * b;
}
var mul = multiplication(1, 3, 5);
console.log(mul);
