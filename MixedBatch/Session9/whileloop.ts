// inti
// while(expression){
//     //code block to be executed
//     //increment/decrement
// }

let i: number = 1;
while(i<=10){
    // console.log("Number is: " + i);
    let pNumber = document.createElement('p');
    pNumber.textContent = `Number is: ${i}`;
    document.body.appendChild(pNumber);
    i++;
}