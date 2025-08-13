import { IGenders } from "../Interfaces/MasterInterfaces";

export const GenderSevice = async (): Promise<IGenders[]> => {

    const respose = await fetch("https://localhost:7150/api/Master/genders", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!respose.ok){
        throw new Error("Failed to fetch");
    }

    const data: IGenders[] = await respose.json();

    return data;
}