let grade: string = "B";

// switch(expression) {
//     case 1: {
//         // code block
//     }
//     case 2: {
//         // code block
//     }
//     case n: {
//         // code block
//     }
//     default: {
//         // code block
//     }
// }

switch (grade) {
    case "A":{
        console.log("Excellent")
        break;
    }
    case "B":{
        console.log("Good")
        break;
    }
    case "C":{
        console.log("Average")
        break;
    }
    case "D":{
        console.log("Poor")
        break;
    }   
    default:{
        console.log("Student may failed")
        break;
    }
}
