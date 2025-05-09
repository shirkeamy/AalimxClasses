const welcome: string = "Welcome to Typescript";

console.log(welcome);


let heading = document.createElement("h1");
heading.textContent = "Hello, World!, Welcome to Ts";

document.body.appendChild(heading);

let variableName: string | undefined | null;
console.log(variableName);

let varName: string;
varName = "any text";
varName = "any text 2";

const varName1: string = "text 1";
// varName1 = ""

const varName2: boolean = true;
const varName3: number = 1;
// const varName4: bigint = 1n;
const todaysDate: Date = new Date();

const person: {
    name: string,
    age: number
} = {
    name: "Dan",
    age: 32
};