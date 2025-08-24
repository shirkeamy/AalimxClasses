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

export const GetEmployeeById = async (employeeId: number): Promise<IEmployee> => {

    const respose = await fetch(`https://localhost:7150/api/Employee/${employeeId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!respose.ok){
        throw new Error("Failed to fetch");
    }

    const data: IEmployee = await respose.json();

    data.dateOfBirth = new Date(data.dateOfBirth);

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

export const UpdateEmployee = async (employee: IEmployee): Promise<string> => {

    const respose = await fetch("https://localhost:7150/api/Employee", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })

    if(!respose.ok){
        throw new Error("Error while updating the employee");
    }

    const data = await respose.text();

    return data;
}

export const DeleteEmployee = async (employeeId: number): Promise<string> => {

    const respose = await fetch(`https://localhost:7150/api/Employee/${employeeId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!respose.ok){
        throw new Error("Failed to delete");
    }

    const data = await respose.text();
    return data;
}