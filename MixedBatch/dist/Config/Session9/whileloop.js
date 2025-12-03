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
