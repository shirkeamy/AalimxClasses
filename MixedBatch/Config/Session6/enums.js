var OperationType;
(function (OperationType) {
    OperationType[OperationType["INSERT"] = 0] = "INSERT";
    OperationType[OperationType["UPDATE"] = 1] = "UPDATE";
    OperationType[OperationType["DELETE"] = 2] = "DELETE";
    OperationType[OperationType["XYZ"] = 3] = "XYZ";
})(OperationType || (OperationType = {}));
var Operations;
(function (Operations) {
    Operations[Operations["INSERT"] = 1] = "INSERT";
    Operations[Operations["UPDATE"] = 2] = "UPDATE";
    Operations[Operations["DELETE"] = 3] = "DELETE";
})(Operations || (Operations = {}));
console.log(Operations.INSERT);
var userInfo;
userInfo = {
    userName: "Amol Shirke",
    isActive: true,
    operationType: OperationType.UPDATE
};
if (userInfo.operationType === OperationType.INSERT) {
    console.log("User is performing INSERT operation");
}
if (userInfo.operationType === OperationType.XYZ) {
    console.log("User is performing XYZ operation");
}
var userRole;
(function (userRole) {
    userRole["ADMIN"] = "ADMIN";
    userRole["USER"] = "USER";
    userRole["GUEST"] = "GUEST";
})(userRole || (userRole = {}));
var userRoleInfo = userRole.GUEST;
if (userRoleInfo === userRole.ADMIN) {
    console.log("User is ADMIN");
}
else if (userRoleInfo === userRole.USER) {
    console.log("User is USER");
}
else if (userRoleInfo === userRole.GUEST) {
    console.log("User is GUEST");
}
