let userRole = "admin"; // string type

if(userRole === "admin") {
    let userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome Admin";
    document.body.appendChild(userHeading);
}

let newUserRole = "usedfgsr"; // string type
if(newUserRole === "user") {
    let userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome User";
    document.body.appendChild(userHeading);
} else {
    let userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome Guest";
    document.body.appendChild(userHeading);
}

newUserRole = "admin";

if(newUserRole === "user") {
    let userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome User";
    document.body.appendChild(userHeading);
} else if(newUserRole === "admin") {
    let userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome Admin from nested if";
    document.body.appendChild(userHeading);
} else if(newUserRole === "student") {
    let userHeading = document.createElement("h1");
    userHeading.textContent = "Welcome Student";
    document.body.appendChild(userHeading);
} else {
    let userHeading = document.createElement("h1");
    userHeading.textContent = "user role is not defined";
    userHeading.style.color = "red";
    document.body.appendChild(userHeading);
}

let xyz: boolean = false;

// xyz === true ? console.log("xyz is true") : console.log("xyz is false");
xyz ? console.log("xyz is true") : console.log("xyz is false");

