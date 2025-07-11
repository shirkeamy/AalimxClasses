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
    dateOfBirth: new Date("1990-01-01")
};
console.log(userDetails);
