// app.ts
// This is the main entry point for the TypeScript application.
var welcome = "welcome to TypeScript from console";
console.log(welcome);
var heading = document.createElement("h1");
heading.textContent = "Welcome to TypeScript";
document.body.appendChild(heading);
function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(50, 20));
console.log(addition(50, 50));
//addition("10", "20");
console.log(addition(10, 20));
// DataTypes/datatype.ts
// TypeScript Data Types Example
// This file demonstrates various data types in TypeScript including let/const variables, arrays, objects
// and tuples.
//let const
var number1;
number1 = 10;
console.log(number1);
number1 = 50;
console.log(number1);
var number2 = 20;
console.log(number2);
// number2 = 100; // Error: Cannot assign to 'number2' because it is a constant.
// let/const variableName: dataType = value;
var message = "Hello, TypeScript!";
console.log(message);
var isActive = true;
console.log(isActive);
var dateOfBirth = new Date("1990-01-01");
console.log(dateOfBirth);
var jobType = "Full-time";
jobType = null; // jobType can be null
jobType = undefined; // jobType can also be undefined
// jobType = 10; // Error: Type 'number' is not assignable to type 'string | null | undefined'.
var names = ["Alice", "Bob", "Charlie"];
console.log(names);
console.log(names[0]);
names[3] = "David";
console.log(names);
names.push("Eve");
console.log(names);
names.map(function (name) {
    console.log(name);
});
var userDetails = {
    name: "John Doe",
    age: 30,
    isActive: true,
    dateOfBirth: new Date("1990-01-01"),
    salary: 50000,
    email: null
};
console.log(userDetails);
var userDetails2 = {
    name: "Jane Smith",
    age: 25,
    isActive: false,
    dateOfBirth: new Date("1995-05-15"),
    salary: 60000,
    email: "exmaple@example.com"
};
console.log(userDetails2);
var userDetails3 = {
    name: "Jane Smith",
    age: 25,
    isActive: false,
    dateOfBirth: new Date("1995-05-15"),
    email: "exmaple@example.com"
};
console.log(userDetails3);
// tuple
var colors = [255, 0, 0]; // RGB color
var user = ["Alice", 30, true, new Date()]; // Name, Age, IsActive
console.log(colors);
console.log(user);
//user = [10, "", false, new Date()]; // Changing the tuple values
// enum.ts file
var Opetation;
(function (Opetation) {
    Opetation[Opetation["INSERT"] = 1] = "INSERT";
    Opetation[Opetation["UPDATE"] = 2] = "UPDATE";
    Opetation[Opetation["DELETE"] = 3] = "DELETE";
})(Opetation || (Opetation = {}));
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
    UserRoles["GUEST"] = "guest";
})(UserRoles || (UserRoles = {}));
var userinfo = {
    id: 1,
    name: "Amol Shirke",
    isActive: true,
    createdAt: new Date(),
    operation: Opetation.UPDATE, // Using the enum value
    role: UserRoles.ADMIN // Using the UserRoles enum
};
// api call 
if (userinfo.operation === Opetation.INSERT) {
    console.log("Inserting user:", userinfo);
}
else if (userinfo.operation === Opetation.UPDATE) {
    userinfo.name = "Amol Shirke Updated";
    console.log("Updating user:", userinfo);
}
else if (userinfo.operation === Opetation.DELETE) {
    console.log("Deleting user:", userinfo);
}
if (userinfo.role === UserRoles.ADMIN) {
    console.log("User has admin privileges:", userinfo);
}
else if (userinfo.role === UserRoles.GUEST) {
    console.log("User is a guest:", userinfo);
}
else if (userinfo.role === UserRoles.USER) {
    console.log("User is a regular user:", userinfo);
}
