for (var index = 0; index < 10; index++) {
    console.log(index);
}
// while(condition) {
//     // code
// }
var i = 0;
while (i < 10) {
    console.log("1 TO 10 FROM WHILE loop: ", i);
    // i = i+1;
    i++;
}
var num = 1;
while (num < 10) {
    if (num === 4) {
        break;
    }
    console.log("using break statement ", num);
    num++;
}
var numberToBeFact = 3;
var fact = 1;
while (numberToBeFact >= 1) {
    fact = fact * numberToBeFact;
    numberToBeFact--;
}
console.log("Factorial of 5 is ".concat(fact));
// do {
// } while (condition);
var n = 10;
do {
    console.log("number from do while loop: ".concat(n));
    n--;
} while (n >= 0);
