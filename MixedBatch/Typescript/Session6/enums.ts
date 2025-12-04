enum OperationType {
    INSERT, // Default value is 0
    UPDATE,
    DELETE,
    XYZ
}

enum Operations {
    INSERT = 1, // Default value is 0
    UPDATE,
    DELETE
}
console.log(Operations.INSERT)

let userInfo: {
    userName: string,
    isActive: boolean,
    operationType: OperationType
}

userInfo = {
    userName: "Amol Shirke",
    isActive: true,
    operationType: OperationType.UPDATE
}

if (userInfo.operationType === OperationType.INSERT) {
    console.log("User is performing INSERT operation");
}
if (userInfo.operationType === OperationType.XYZ) {
    console.log("User is performing XYZ operation");
}

enum userRole {
    ADMIN = "ADMIN",
    USER = "USER",
    GUEST = "GUEST"
}

let userRoleInfo: string = userRole.GUEST;

if (userRoleInfo === userRole.ADMIN) {
    console.log("User is ADMIN");
} else if (userRoleInfo === userRole.USER) {
    console.log("User is USER");
} else if (userRoleInfo === userRole.GUEST) {
    console.log("User is GUEST");
}