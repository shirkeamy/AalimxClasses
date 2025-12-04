let grade: string = "asd";
let gradeDiv = document.createElement("div");

switch(grade) {
    case "A":
        gradeDiv.textContent = "You got A grade!";
    break;
    case "B":
        gradeDiv.textContent = "You got B grade!";
    break;
    case "C":
        gradeDiv.textContent = "You got C grade!";
    break;
    case "D":
        gradeDiv.textContent = "You got D grade!";
    break;
    default:
        gradeDiv.textContent = "You have invalid grade!";
}

document.body.appendChild(gradeDiv);