// for(let num = 1; num <= 10; num++){
//     console.log("Number is: " + num);
// }
for (var num = 0; num < 10; num++) {
    console.log(num + 1);
}
var userNames = ["Amol", "Sanket", "Ajinkya", "Prasad"];
var userNameHeading = document.createElement("h2");
for (var i_1 = 0; i_1 < userNames.length; i_1++) {
    userNameHeading.textContent += userNames[i_1] + " ";
}
document.body.appendChild(userNameHeading);
for (var index in userNames) {
    console.log("user is: " + userNames[index]);
}
