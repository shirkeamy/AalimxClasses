function Add(a, b) {
    return a + b;
}
console.log("The sum of 5 and 3 is:", Add(5, 3));
// console.log("The sum of 5 and 3 is:", Add("5", 3)); // Argument of type 'string' is not assignable to parameter of type 'number'.
// To rune ts file use command: tsc aap.ts
function Add1(a, b) {
    return a + b;
}
console.log("The sum of 5 and 3 is:", Add(5, 3));
console.log("The sum of 5 and 3 is:", Add(50, 3));
// to run ts in watch mode use command: tsc app.ts --watch
// to run ts in watch mode use command: tsc -w app.ts
// Session 3 command
// tsc app.ts .\Session3\file1.ts .\Session3\file2.ts
// tsc -w app.ts .\Session3\file1.ts .\Session3\file2.ts --outDir .\dist\
// outDir - specifies an output folder for all emitted files.
// outFile - Concatenate and emit output to single file.
// tsc -w app.ts .\Session3\file1.ts .\Session3\file2.ts --outFile .\dist\appbundle.js
// tsc
// tsc -w
var userName = "Amol Shirke";
console.log("User Name is:", userName);
var msg = "Hello from file1.ts";
console.log(msg);
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("The sum of num1 and num2 is:", sum);
console.log("From application file");
