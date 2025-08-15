import { IEmployees } from "../Interfaces/EmployeeInterfaces";

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
