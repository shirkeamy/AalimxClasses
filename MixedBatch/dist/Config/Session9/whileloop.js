// inti
// while(expression){
//     //code block to be executed
//     //increment/decrement
// }
var i = 1;
while (i <= 10) {
    // console.log("Number is: " + i);
    var pNumber = document.createElement('p');
    pNumber.textContent = "Number is: ".concat(i);
    document.body.appendChild(pNumber);
    i++;
}

// do {
//     // code
// } while (condition);

var j = 1;
do{
    console.log("Do While Number is: " + j);
    j++;
} while(j <= 10);