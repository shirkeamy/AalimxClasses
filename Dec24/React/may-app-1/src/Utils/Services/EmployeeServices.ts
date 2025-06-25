import { IEmployee, IEmployees } from "../ServiceInterfaces";

export const GetAllEmployees = async (): Promise<IEmployees[]> => {

    try {
        const response = await fetch("https://localhost:7150/api/Employee", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if(!response.ok)
        {
            throw new Error("Network error");
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error("Error in Employee API call", error)
        throw error;
    }
}

export const GetEmployeeById = async (employeeId: number): Promise<IEmployee> => {

    try {
        const response = await fetch(`https://localhost:7150/api/Employee/${employeeId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if(!response.ok)
        {
            throw new Error("Network error");
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error("Error in Employee API call", error)
        throw error;
    }
}

export const SaveEmployee = async (employee: IEmployee): Promise<string> => {

    try {
        const response = await fetch(`https://localhost:7150/api/Employee`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        if(!response.ok)
        {
            throw new Error("Network error");
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error("Error in Employee API call", error)
        throw error;
    }
}

export const UpdateEmployee = async (employee: IEmployee): Promise<string> => {

    try {
        const response = await fetch(`https://localhost:7150/api/Employee`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        })
        if(!response.ok)
        {
            throw new Error("Network error");
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error("Error in Employee API call", error)
        throw error;
    }
}


export const DeleteEmployee = async (employeeId: number): Promise<string> => {

    try {
        const response = await fetch(`https://localhost:7150/api/Employee/${employeeId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if(!response.ok)
        {
            throw new Error("Network error");
        }
        const data = response.json();
        return data;
    } catch (error) {
        console.error("Error in Employee API call", error)
        throw error;
    }
}