// for(init;condition;expres){
//     // code 
// }
for (var index = 0; index < 10; index++) {
    console.log(index + 1);
}
var users = ["John", "Peter", "Sam"];
console.log(users);
for (var index = 0; index < users.length; index++) {
    console.log("User from index ".concat(index, ": ").concat(users[index]));
}
for (var user in users) {
    console.log("User from for in: ", users[user]);
}
users.map(function (user, index) {
    console.log("user from index using map ".concat(index, ": ").concat(user));
});
