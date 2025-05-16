// if(true) {
//     // Statements
// }
var employeeStatus = false;
var employeeDetails = {
    empId: 1,
    empName: "john"
};
if (!employeeStatus) {
    console.log(employeeDetails);
}
var employee = {
    empName: "Peter",
    EmpId: 2,
    status: true,
    salary: 1130
};
if (employee.status) {
    console.log("employee", employee);
}
if (employee.salary >= 1200) {
    var increment = employee.salary * 2;
    employee.salary = increment;
    console.log(employee);
    console.log("Employee is eligible for PF");
}
else {
    var increment = employee.salary * 5;
    employee.salary = increment;
    console.log(employee);
    console.log("Employee is not eligible for PF");
}
