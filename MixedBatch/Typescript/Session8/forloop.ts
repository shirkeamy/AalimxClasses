// for(let num = 1; num <= 10; num++){
//     console.log("Number is: " + num);
// }

for(let num = 0; num < 10; num++){
    console.log(num + 1);
}

let userNames: string[] = ["Amol", "Sanket", "Ajinkya", "Prasad"];
let userNameHeading = document.createElement("h2");
for(let i = 0; i < userNames.length; i++){
    userNameHeading.textContent += userNames[i] + " ";
}
document.body.appendChild(userNameHeading);

for(let index in userNames) {
    console.log("user is: " + userNames[index]);
}