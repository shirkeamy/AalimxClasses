import { IEmployee, IEmployees } from "../Interfaces/EmployeeInterfaces";

export const GetAllEmployees = async (): Promise<IEmployees[]> => {

    const respose = await fetch("https://localhost:7150/api/Employee", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!respose.ok){
        throw new Error("Failed to fetch");
    }

    const data: IEmployees[] = await respose.json();

    return data;
}

export const PostEmployee = async (employee: IEmployee): Promise<string> => {

    const respose = await fetch("https://localhost:7150/api/Employee", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })

    if(!respose.ok){
        throw new Error("Error while saving the employee");
    }

    const data = await respose.text();

    return data;
}