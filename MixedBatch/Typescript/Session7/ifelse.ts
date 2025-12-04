let heading = document.createElement("h1");
let userRole1: string = "admin";
heading.textContent = "Welcome to TypeScript!";

if(userRole1 === "admin") {
    heading.textContent = "Welcome, Admin";
}

document.body.appendChild(heading);

// condition ? expr1 : expr2

let userRole2: string = "admasdin";
userRole2 === "admin" ? console.log("This user is Admin user") : console.log("This user is Guest user ");
