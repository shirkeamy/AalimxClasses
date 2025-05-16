var Operations;
(function (Operations) {
    Operations[Operations["INSERT"] = 0] = "INSERT";
    Operations[Operations["UPDATE"] = 1] = "UPDATE";
    Operations[Operations["DELETE"] = 2] = "DELETE";
})(Operations || (Operations = {}));
var crudOperation = 4;
if (Operations.INSERT == crudOperation) {
    console.log("Operation insert");
}
else if (crudOperation == Operations.UPDATE) {
    console.log("Operation update");
}
else if (crudOperation == Operations.DELETE) {
    console.log("Operation Delete");
}
else {
    console.error("No operation is selected");
}
var Operation;
(function (Operation) {
    Operation["INSERT"] = "I";
    Operation["UPDATE"] = "U";
    Operation["DELETE"] = "D";
})(Operation || (Operation = {}));
var employeeDetails = {
    empId: 1,
    empName: "Emp Name",
    age: 32,
    operationType: Operation.UPDATE
};
if (employeeDetails.operationType == Operation.INSERT) {
    console.log("insert employeeDetails", employeeDetails);
}
else if (employeeDetails.operationType == Operation.UPDATE) {
    employeeDetails.empName = "Employee Name updated";
    console.log("Update employeeDetails", employeeDetails);
}
else if (employeeDetails.operationType == Operation.DELETE) {
    employeeDetails = null;
    console.log("Delete employeeDetails", employeeDetails);
}
