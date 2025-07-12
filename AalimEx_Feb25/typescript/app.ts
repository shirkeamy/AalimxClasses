// app.ts
// This is the main entry point for the TypeScript application.

let welcome: string = "welcome to TypeScript from console";
console.log(welcome);

let heading = document.createElement("h1");
heading.textContent = "Welcome to TypeScript";
document.body.appendChild(heading);

function addition(num1: number, num2: number) {
    return num1 + num2;
}

console.log(addition(50, 20));
console.log(addition(50, 50));
//addition("10", "20");

console.log(addition(10, 20));