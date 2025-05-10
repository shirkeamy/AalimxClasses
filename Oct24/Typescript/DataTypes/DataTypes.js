var userNames;
userNames = ["John", 'Dan'];
console.log(userNames);
userNames[2] = "Nick";
console.log("after adding data using index", userNames);
userNames.push("Joe"); // idea way to push data into array
console.log("after adding data using puch method", userNames);
//(parameters) => { function body }
userNames.map(function (name, index) {
    console.log("name ".concat(index), name);
});
console.log(userNames[1]);
var userDetails = {
    name: "Dan",
    age: 27,
    isWorking: true
};
console.log(userDetails);
var userParagraph = document.createElement("p");
userParagraph.textContent = userDetails.name;
var userParagraph2 = document.createElement("p");
userParagraph2.textContent = JSON.stringify(userDetails);
document.body.appendChild(userParagraph);
document.body.appendChild(userParagraph2);
