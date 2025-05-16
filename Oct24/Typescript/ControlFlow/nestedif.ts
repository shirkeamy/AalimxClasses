interface IEmployeeDetails {
    empName: string;
    EmpId: number;
    status: boolean;
    salary: number;
}

let nestedIfEmployeeDetails: IEmployeeDetails = {
    empName: "Peter",
    EmpId: 2,
    status: true,
    salary: 1550
}

if (nestedIfEmployeeDetails.salary == 100){
    console.log("increment by 10")
    let increment: number = nestedIfEmployeeDetails.salary * 10;
    nestedIfEmployeeDetails.salary = increment;
} else if (nestedIfEmployeeDetails.salary > 500 && nestedIfEmployeeDetails.salary < 1000) {
    console.log("increment by 5")
    let increment: number = nestedIfEmployeeDetails.salary * 5;
    nestedIfEmployeeDetails.salary = increment;
} else if (nestedIfEmployeeDetails.salary == 1000) {
    console.log("increment by 2")
    let increment: number = nestedIfEmployeeDetails.salary * 2;
    nestedIfEmployeeDetails.salary = increment;
} else {
    console.log("No increment")
}

console.log("nested if nestedIfEmployeeDetails", nestedIfEmployeeDetails)