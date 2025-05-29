enum Operations {
    INSERT,
    UPDATE,
    DELETE
}

let crudOperation: number = 4;

if(Operations.INSERT == crudOperation) {
    console.log("Operation insert");
}
else if(crudOperation == Operations.UPDATE) {
    console.log("Operation update");
}
else if(crudOperation == Operations.DELETE) {
    console.log("Operation Delete");
}
else {
    console.error("No operation is selected");
}


enum Operation {
    INSERT = "I",
    UPDATE = "U",
    DELETE = "D"
}

let employeeDetails: {
    empName: string;
    empId: number;
    age: number
    operationType: Operation
} | null = {
    empId: 1,
    empName: "Emp Name",
    age: 32,
    operationType: Operation.UPDATE
}

if(employeeDetails.operationType == Operation.INSERT){
    console.log("insert employeeDetails", employeeDetails);
}else if (employeeDetails.operationType == Operation.UPDATE){
    employeeDetails.empName = "Employee Name updated";
    console.log("Update employeeDetails", employeeDetails);
} else if (employeeDetails.operationType == Operation.DELETE){
    employeeDetails = null
    console.log("Delete employeeDetails", employeeDetails);
}