for (let index = 0; index < 10; index++) {
    console.log(index)
}

// while(condition) {
//     // code
// }

let i: number = 0;
while(i < 10) {
    console.log(`1 TO 10 FROM WHILE loop: `, i);

    // i = i+1;
    i++;

}

let num: number = 1;
while(num < 10) {

    if(num === 4){
        break;
    }

    console.log(`using break statement `, num);

    num++;

}

let numberToBeFact: number = 3;
let fact: number = 1;

while(numberToBeFact >= 1){
    fact = fact * numberToBeFact;
    numberToBeFact--;
}

console.log(`Factorial of 5 is ${fact}`);

// do {
    
// } while (condition);

let n: number = 10;

do {
    console.log(`number from do while loop: ${n}`)
    n--;
} while (n >= 0 );