//let const

let number1: number;
number1 = 10;
console.log(number1);
number1 = 50;
console.log(number1);

const number2: number = 20;
console.log(number2);
// number2 = 100; // Error: Cannot assign to 'number2' because it is a constant.

// let/const variableName: dataType = value;

let message: string = "Hello, TypeScript!";
console.log(message);

let isActive: boolean = true;
console.log(isActive);

let dateOfBirth: Date = new Date("1990-01-01");
console.log(dateOfBirth);

let jobType: string | null | undefined = "Full-time";
jobType = null; // jobType can be null
jobType = undefined; // jobType can also be undefined
// jobType = 10; // Error: Type 'number' is not assignable to type 'string | null | undefined'.

let names: string[] = ["Alice", "Bob", "Charlie"];
console.log(names);
console.log(names[0]);

names[3] = "David";
console.log(names);

names.push("Eve");
console.log(names);

names.map((name: string)=>{
    console.log(name);
})

let userDetails: {
    name: string;
    age: number;
    isActive: boolean;
    dateOfBirth: Date;
} = {
    name: "John Doe",
    age: 30,
    isActive: true,
    dateOfBirth: new Date("1990-01-01")
}

console.log(userDetails);