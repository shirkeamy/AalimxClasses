// function fnName(parameter1,.....parameterN): dataType {
//     // code
// }

function Add(num1: number, num2: number): number {
    return num1 + num2;
}

let addition: number = Add(10, 50);

console.log(`Addition: ${addition}`);

function Message(userName: string): void {
    let msg: string = `Welcome to TypeScript, ${userName}`;
    console.log(msg);
}

Message("John Doe");

// variable as fun

// let add: (a: number, b: number) => number = (a: number, b: number) {

//     return a+b;

// }

// let funName: (a: number, b: number) => dataType = function (a: number, b: number) {

// }

let add1: (a: number, b: number) => number = function (a: number, b: number) {
    return a + b;
}

let add = add1(10, 20);
console.log(add);

// some code
// some code ()=>{}
// some code


function multiplication(a: number, b: number, c?: number): number {

    if (typeof c !== `undefined`) {
        return a * b * c
    }

    return a * b

}

let mul = multiplication(1, 3,5);
console.log(mul);