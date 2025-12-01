// array.map((value, index, array) => {})
var userDetails = [
    { name: "Alice", isActive: true },
    { name: "Bob", isActive: false },
    { name: "Charlie", isActive: true },
    { name: "Diana", isActive: false }
];
// console.log(userDetails.map((user: IUser) => { user }));
userDetails.map(function (user) { console.log(user.name); });
var olUserList = document.createElement('ol');
userDetails.map(function (user, index) {
    var liUser = document.createElement('li');
    liUser.textContent = "User Name ".concat(user.name, " is on index ").concat(index);
    olUserList.appendChild(liUser);
});
document.body.appendChild(olUserList);
