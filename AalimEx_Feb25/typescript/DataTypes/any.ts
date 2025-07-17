let anyVar: any;
anyVar = "Any string";
console.log(anyVar)
anyVar = 10;
console.log(anyVar)
anyVar = new Date();
console.log(anyVar)
anyVar = true;
console.log(anyVar)

let anyObj: any;
anyObj = {
    id: 1,
    name: "Amol Shirke",
    isActive: true,
    createdAt: new Date()
};

console.log(anyObj);
console.log("anyObj from any data type:");
console.log(anyObj.asdfasdf);

anyObj = 10;
console.log(anyObj);