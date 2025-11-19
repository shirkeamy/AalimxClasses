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
