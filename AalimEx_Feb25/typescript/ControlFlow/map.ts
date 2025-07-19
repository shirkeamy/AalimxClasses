// map - array
// map - value, index, array

interface UserDetails {
    name: string;
    age: number;
}

let users: UserDetails[] = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

let userList = document.createElement("ul");
users.map((user: UserDetails, index: number) => {
    let listItem = document.createElement("li");
    listItem.textContent = `User ${index + 1}: ${user.name}, Age: ${user.age}`;
    userList.appendChild(listItem);
});
document.body.appendChild(userList);

users.map((user: UserDetails, index: number)=>{
    console.log(`User from map fn map.ts ${index}: ${user.name}, Age: ${user.age}`);

})