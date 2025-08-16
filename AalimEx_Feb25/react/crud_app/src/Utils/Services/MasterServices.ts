import { ICities, ICountries, IGenders, IStates } from "../Interfaces/MasterInterfaces";

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

export const GetAllCoutries = async (): Promise<ICountries[]> => {

    const respose = await fetch("https://localhost:7150/api/Master/countries", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!respose.ok){
        throw new Error("Failed to fetch");
    }

    const data: ICountries[] = await respose.json();

    return data;
}

export const GetAllStatesByCountry = async (countryId: number): Promise<IStates[]> => {

    console.log("countryId", countryId)

    const respose = await fetch(`https://localhost:7150/api/Master/states/${countryId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!respose.ok){
        throw new Error("Failed to fetch");
    }

    const data: IStates[] = await respose.json();

    return data;
}

export const GetAllCitiesByState = async (stateId: number): Promise<ICities[]> => {
    const respose = await fetch(`https://localhost:7150/api/Master/cities/${stateId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })

    if(!respose.ok){
        throw new Error("Failed to fetch");
    }

    const data: ICities[] = await respose.json();

    return data;
}
