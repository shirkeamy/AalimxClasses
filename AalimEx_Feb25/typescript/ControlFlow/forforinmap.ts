
let array: string[] = ["apple", "banana", "cherry"];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`Element at index ${index} is ${element}`);
}

for (let index = 0; index < 10; index++) {
    console.log(`NUmbers - ${index+1}`);
}

for (let index in array) {
    const element = array[index];
    console.log(`Element at index from for in loop ${index} is ${element}`);
}

let usersList: string[] = ["Alice", "Bob", "Charlie"];
usersList.map((user: string, i: number) => {
    // This is a placeholder for any operation you want to perform on each user
    console.log(`User from map fn ${i}: ${user}`);
})