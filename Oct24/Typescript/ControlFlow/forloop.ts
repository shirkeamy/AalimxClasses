// for(init;condition;expres){
//     // code 
// }

for (let index = 0; index < 10; index++) {
    console.log(index + 1)
}

let users: string[] = ["John", "Peter", "Sam"];

console.log(users);

for (let index = 0; index < users.length; index++) {
    console.log(`User from index ${index}: ${users[index]}`)
    
}

for (const user in users) {
    console.log(`User from for in: `, users[user])
}

users.map((user: string, index: number)=>{
    console.log(`user from index using map ${index}: ${user}`)
})