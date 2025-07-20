function Addition(a: number, b: number): number {
    return a + b;
}

let additionResult = Addition(5, 10);
console.log(`Addition Result: ${additionResult}`); // template literals `string ${variable}`

// () => {}
// when we have call back then we use arrow fn

()=>{
    console.log("This is an arrow function");
}

let add: (a: number, b: number) => number = (a: number, b: number) => {
    return a + b;
}

let addResult = add(10, 20);
console.log(`Arrow Function Addition Result: ${addResult}`);

// Function with default parameters
function discountPrice(price: number, discount: number = 10): number {
    let dics = (price * discount) / 100;
    return price - dics;
}

let discountedPrice = discountPrice(100, 15);
console.log(`Discounted Price: ${discountedPrice}`);
let defaultDiscountedPrice = discountPrice(100);
console.log(`Default Discounted Price: ${defaultDiscountedPrice}`);

function multiplication(a: number, b: number, c?: number): number {
    if (c === undefined) {
       return a*b
    }

    return a * b * c;
}

let multiplicationResult = multiplication(2, 3);
console.log(`Multiplication Result: ${multiplicationResult}`); // 6
let multiplicationWithThird = multiplication(2, 3, 4);
console.log(`Multiplication with third parameter Result: ${multiplicationWithThird}`); //