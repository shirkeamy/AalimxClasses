// if(true) {
//     // Statements
// }

let employeeStatus: boolean = false;

let employeeDetails: {
    empName: string;
    empId: number;
} = {
    empId: 1,
    empName: "john"
}

if (!employeeStatus) {
    console.log(employeeDetails)
}


interface IEmployeeDetails {
    empName: string;
    EmpId: number;
    status: boolean;
    salary: number;
}

let employee: IEmployeeDetails = {
    empName: "Peter",
    EmpId: 2,
    status: true,
    salary: 1130
}

if (employee.status) {
    console.log("employee", employee)
}

if (employee.salary >= 1200) {
    let increment = employee.salary * 2;
    employee.salary = increment;
    console.log(employee);
    console.log("Employee is eligible for PF");
} else {
    let increment = employee.salary * 5;
    employee.salary = increment;
    console.log(employee);
    console.log("Employee is not eligible for PF");
}