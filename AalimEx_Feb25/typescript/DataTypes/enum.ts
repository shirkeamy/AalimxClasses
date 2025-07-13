// enum.ts file
enum Opetation {
    INSERT = 1, // default value is 0, so we start from 1
    UPDATE,
    DELETE
}

enum UserRoles {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}

interface User {
    id: number;
    name: string;
    isActive: boolean;
    createdAt: Date;
    operation: Opetation;
    role: UserRoles; // Using the UserRoles enum
}

let userinfo: User = {
    id: 1,
    name: "Amol Shirke",
    isActive: true,
    createdAt: new Date(),
    operation: Opetation.UPDATE, // Using the enum value
    role: UserRoles.ADMIN // Using the UserRoles enum
};


// api call 
if(userinfo.operation === Opetation.INSERT) {
    console.log("Inserting user:", userinfo);
} else if(userinfo.operation === Opetation.UPDATE) {
    userinfo.name = "Amol Shirke Updated";
    console.log("Updating user:", userinfo);
} else if(userinfo.operation === Opetation.DELETE) {
    console.log("Deleting user:", userinfo);
}


if(userinfo.role === UserRoles.ADMIN) {
    console.log("User has admin privileges:", userinfo);
} else if(userinfo.role === UserRoles.GUEST) {
    console.log("User is a guest:", userinfo);
} else if(userinfo.role === UserRoles.USER) {
    console.log("User is a regular user:", userinfo);
}