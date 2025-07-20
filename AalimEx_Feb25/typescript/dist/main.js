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
var array = ["apple", "banana", "cherry"];
for (var index = 0; index < array.length; index++) {
    var element = array[index];
    console.log("Element at index ".concat(index, " is ").concat(element));
}
for (var index = 0; index < 10; index++) {
    console.log("NUmbers - ".concat(index + 1));
}
for (var index in array) {
    var element = array[index];
    console.log("Element at index from for in loop ".concat(index, " is ").concat(element));
}
var usersList = ["Alice", "Bob", "Charlie"];
usersList.map(function (user, i) {
    // This is a placeholder for any operation you want to perform on each user
    console.log("User from map fn ".concat(i, ": ").concat(user));
});
var userRole = "admin"; // string type
if (userRole === "admin") {
    var userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome Admin";
    document.body.appendChild(userHeading);
}
var newUserRole = "usedfgsr"; // string type
if (newUserRole === "user") {
    var userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome User";
    document.body.appendChild(userHeading);
}
else {
    var userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome Guest";
    document.body.appendChild(userHeading);
}
newUserRole = "admin";
if (newUserRole === "user") {
    var userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome User";
    document.body.appendChild(userHeading);
}
else if (newUserRole === "admin") {
    var userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome Admin from nested if";
    document.body.appendChild(userHeading);
}
else if (newUserRole === "student") {
    var userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome Student";
    document.body.appendChild(userHeading);
}
else {
    var userHeading = document.createElement("h1");
    userHeading.textContent = "user role is not defined";
    userHeading.style.color = "red";
    document.body.appendChild(userHeading);
}
var xyz = false;
// xyz === true ? console.log("xyz is true") : console.log("xyz is false");
xyz ? console.log("xyz is true") : console.log("xyz is false");
// map - array
// map - value, index, array
var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
var userList = document.createElement("ul");
users.map(function (user, index) {
    var listItem = document.createElement("li");
    listItem.textContent = "User ".concat(index + 1, ": ").concat(user.name, ", Age: ").concat(user.age);
    userList.appendChild(listItem);
});
document.body.appendChild(userList);
users.map(function (user, index) {
    console.log("User from map fn map.ts ".concat(index, ": ").concat(user.name, ", Age: ").concat(user.age));
});
var grade = "E";
var gradeHeading = document.createElement("h1");
switch (grade) {
    case "A":
        gradeHeading.textContent = "Your grade is: " + grade + " - Excellent";
        break;
    case "B":
        gradeHeading.textContent = "Your grade is: " + grade + " - Good";
        break;
    case "C":
        gradeHeading.textContent = "Your grade is: " + grade + " - Avevrage";
        break;
    case "D":
        gradeHeading.textContent = "Your grade is: " + grade + " - Poor";
        break;
    default:
        gradeHeading.textContent = "Your grade is: " + grade + " - Student is failed";
}
document.body.appendChild(gradeHeading);
// for (let i = 0; i < 10; i++) {
//     let numberHeading = document.createElement("h2");
//     numberHeading.textContent = `Number from for ${i + 1}`;
//     document.body.appendChild(numberHeading);
// }
var i = 11;
while (i <= 20) {
    var numberHeading = document.createElement("h2");
    numberHeading.textContent = "Number from while ".concat(i);
    document.body.appendChild(numberHeading);
    i++;
}
var numberToFact = 3;
var factorial = 1;
// fact = fact * numberToFact  --- factorial *= numberToFact;
// numberToFact = numberToFact - 1 --- numberToFact--
while (numberToFact >= 1) {
    factorial = factorial * numberToFact;
    numberToFact--;
}
var factorialParagraph = document.createElement("p");
factorialParagraph.textContent = "Factorial of 5 is ".concat(factorial);
document.body.appendChild(factorialParagraph);
// do {
//     // code
// }while(condition)
var n = 0;
do {
    var numberHeading = document.createElement("h2");
    numberHeading.textContent = "Number from do while ".concat(n + 1);
    document.body.appendChild(numberHeading);
    n++;
} while (n < 10);
var anyVar;
anyVar = "Any string";
console.log(anyVar);
anyVar = 10;
console.log(anyVar);
anyVar = new Date();
console.log(anyVar);
anyVar = true;
console.log(anyVar);
var anyObj;
anyObj = {
    id: 1,
    name: "Amol Shirke",
    isActive: true,
    createdAt: new Date()
};
console.log(anyObj);
console.log("anyObj from any data type:");
console.log(anyObj.asdfasdf);
anyObj = 10;
console.log(anyObj);
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
function Addition(a, b) {
    return a + b;
}
var additionResult = Addition(5, 10);
console.log("Addition Result: ".concat(additionResult)); // template literals `string ${variable}`
// () => {}
// when we have call back then we use arrow fn
(function () {
    console.log("This is an arrow function");
});
var add = function (a, b) {
    return a + b;
};
var addResult = add(10, 20);
console.log("Arrow Function Addition Result: ".concat(addResult));
// Function with default parameters
function discountPrice(price, discount) {
    if (discount === void 0) { discount = 10; }
    var dics = (price * discount) / 100;
    return price - dics;
}
var discountedPrice = discountPrice(100, 15);
console.log("Discounted Price: ".concat(discountedPrice));
var defaultDiscountedPrice = discountPrice(100);
console.log("Default Discounted Price: ".concat(defaultDiscountedPrice));
function multiplication(a, b, c) {
    if (c === undefined) {
        return a * b;
    }
    return a * b * c;
}
var multiplicationResult = multiplication(2, 3);
console.log("Multiplication Result: ".concat(multiplicationResult)); // 6
var multiplicationWithThird = multiplication(2, 3, 4);
console.log("Multiplication with third parameter Result: ".concat(multiplicationWithThird)); //
