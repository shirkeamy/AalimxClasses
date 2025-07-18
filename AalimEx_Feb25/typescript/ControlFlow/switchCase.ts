let grade: string = "E";

let gradeHeading = document.createElement("h1");


switch (grade) {
    case "A":
        gradeHeading.textContent = "Your grade is: " + grade + " - Excellent";
        break;
    case "B":
        gradeHeading.textContent = "Your grade is: " + grade + " - Good";
        break;
    case "C":
        gradeHeading.textContent = "Your grade is: " + grade + " - Avevrage";
        break;
    case "D":
        gradeHeading.textContent = "Your grade is: " + grade + " - Poor";
        break;
    default:
        gradeHeading.textContent = "Your grade is: " + grade + " - Student is failed";
}

document.body.appendChild(gradeHeading);