let user: {
    name: string;
    age: number;
    dob: Date;
}

user = {
    name: "Shirke",
    age: 30,
    dob: new Date("1993-05-15")
}

console.log(user);

let userDetail: {
    name: string;
    age: number;
    dob: Date;
}

userDetail = {
    name: "Alice",
    age: 25,
    dob: new Date("1998-10-20")
}

console.log(userDetail);

interface IPerson {
    name: string;
    age: number;
    dob: Date;
}

let person: IPerson = {
    name: "",
    age: 0,
    dob: new Date()
}

let person1: IPerson = {
    name: "John",
    age: 12,
    dob: new Date('2000-2-15')
}

console.log(person1);

let arrName: string[] = ["Name1", "Name2", "Name3"];

let userList: IPerson[];
userList = [
    {
        name: "User1",
        age: 22,
        dob: new Date("2001-01-01")
    },
    {
        name: "User2",
        age: 22,
        dob: new Date("2001-01-01")
    }
]

console.log(userList);
console.log(userList[1]);
console.log(userList[0].name);