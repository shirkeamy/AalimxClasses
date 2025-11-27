var heading = document.createElement("h1");
var userRole1 = "admin";
heading.textContent = "Welcome to TypeScript!";
if (userRole1 === "admin") {
    heading.textContent = "Welcome, Admin";
}
document.body.appendChild(heading);
// condition ? expr1 : expr2
var userRole2 = "admasdin";
userRole2 === "admin" ? console.log("This user is Admin user") : console.log("This user is Guest user ");
