// DataTypes/datatype.ts
// TypeScript Data Types Example
// This file demonstrates various data types in TypeScript including let/const variables, arrays, objects
// and tuples.

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


interface IUserInfo {
    name: string;
    age: number;
    isActive: boolean;
    dateOfBirth: Date;
    salary?: number; // Optional property
    email: string | null; // email can be a string or null
}

let userDetails: IUserInfo = {
    name: "John Doe",
    age: 30,
    isActive: true,
    dateOfBirth: new Date("1990-01-01"),
    salary: 50000,
    email: null
}

console.log(userDetails);

const userDetails2: IUserInfo = {
    name: "Jane Smith",
    age: 25,
    isActive: false,
    dateOfBirth: new Date("1995-05-15"),
    salary: 60000,
    email: "exmaple@example.com"
}

console.log(userDetails2);

const userDetails3: IUserInfo = {
    name: "Jane Smith",
    age: 25,
    isActive: false,
    dateOfBirth: new Date("1995-05-15"),
    email: "exmaple@example.com"
}

console.log(userDetails3);

// tuple
let colors: [number, number, number] = [255, 0, 0]; // RGB color
let user: [string, number, boolean, Date] = ["Alice", 30, true, new Date()]; // Name, Age, IsActive

console.log(colors);
console.log(user);

//user = [10, "", false, new Date()]; // Changing the tuple values