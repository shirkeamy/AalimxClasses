// array.map((value, index, array) => {})

interface IUser {
    name: string;
    isActive: boolean;
}

let userDetails: IUser[]  = [
    { name: "Alice", isActive: true },
    { name: "Bob", isActive: false },
    { name: "Charlie", isActive: true },
    { name: "Diana", isActive: false }
];

// console.log(userDetails.map((user: IUser) => { user }));
userDetails.map((user: IUser) => { console.log(user.name); });

let olUserList = document.createElement('ol');

userDetails.map((user: IUser, index: number) => { 
    let liUser = document.createElement('li');
    liUser.textContent = `User Name ${user.name} is on index ${index}`;
    olUserList.appendChild(liUser);
 });

 document.body.appendChild(olUserList);