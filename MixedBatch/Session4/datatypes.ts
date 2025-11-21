// let and const

// const userNameFromDb: string; // 'const' declarations must be initialized.
const userNameFromDb: string = "Shirke";
console.log(userName);
// userNameFromDb = "Shirke"; // Cannot assign to 'userNameFromDb' because it is a constant.

let number1: number = 10;
console.log(number1);
number1 = 20;
console.log(number1);

number1 = 10.1;

// number1 = ""; // Type 'string' is not assignable to type 'number'.

let isActive: boolean = false;
isActive = true;

let DOB: Date = new Date("2020-01-01");
console.log(DOB);

// DOB = "";
// DOB = true;
// DOB = 12345;
// DOB = "2020-01-01"; // Type 'string' is not assignable to type 'Date'.