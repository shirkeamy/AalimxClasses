import { IEmployees, IEmployee } from "../Interfaces/EmployeeInterfaces";

export const GetAllEmployees = async (): Promise<IEmployees[]> => {
    const response = await fetch("https://localhost:7150/api/Employee", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(!response.ok) {
        throw new Error("Failed to fetch employees");
    }

    const data: IEmployees[] = await response.json();

    return data;
}

export const GetEmployeeById = async (employeeId: number): Promise<IEmployee> => {
    const response = await fetch(`https://localhost:7150/api/Employee/${employeeId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(!response.ok) {
        throw new Error("Failed to fetch employee");
    }

    const data: IEmployee = await response.json();

    return data;
}

export const PostEmployee = async (employee: IEmployee): Promise<string> => {
    const response = await fetch("https://localhost:7150/api/Employee", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })

    if(!response.ok) {
        throw new Error("Failed to save employee");
    }

    const data: string = await response.text();
    return data;
}


export const PutEmployee = async (employee: IEmployee): Promise<string> => {
    const response = await fetch("https://localhost:7150/api/Employee", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employee)
    })

    if(!response.ok) {
        throw new Error("Failed to save employee");
    }

    const data: string = await response.text();
    return data;
}