// for (let i = 0; i < 10; i++) {
//     let numberHeading = document.createElement("h2");
//     numberHeading.textContent = `Number from for ${i + 1}`;
//     document.body.appendChild(numberHeading);
// }

let i: number = 11;
while (i <= 20) {
    let numberHeading = document.createElement("h2");
    numberHeading.textContent = `Number from while ${i}`;
    document.body.appendChild(numberHeading);
    i++;
}

let numberToFact: number = 3;
let factorial: number = 1;

// fact = fact * numberToFact  --- factorial *= numberToFact;
// numberToFact = numberToFact - 1 --- numberToFact--
while (numberToFact >= 1){
    factorial = factorial * numberToFact;
    numberToFact--;
}

let factorialParagraph = document.createElement("p");
factorialParagraph.textContent = `Factorial of 5 is ${factorial}`;
document.body.appendChild(factorialParagraph);

// do {
//     // code
// }while(condition)

let n: number = 0;

do {

    let numberHeading = document.createElement("h2");
    numberHeading.textContent = `Number from do while ${n + 1}`;
    document.body.appendChild(numberHeading);
    n++;

} while(n < 10)