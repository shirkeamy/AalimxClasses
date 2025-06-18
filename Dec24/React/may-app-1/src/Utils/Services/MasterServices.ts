import { ICities, ICountries, IGenders, IStates } from "../ServiceInterfaces";

export const GetAllGenders = async (): Promise<IGenders[]> => {

    try {
        const response = await fetch("https://localhost:7150/api/Master/genders", {
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
        console.error("Error in Gender API call", error)
        throw error;
    }
}

export const GetAllCountries = async (): Promise<ICountries[]> => {

    try {
        const response = await fetch("https://localhost:7150/api/Master/countries", {
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
        console.error("Error in Gender API call", error)
        throw error;
    }
}

export const GetStateByCountryId = async (countryId: number): Promise<IStates[]> => {

    try {
        const response = await fetch(`https://localhost:7150/api/Master/states/${countryId}`, {
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
        console.error("Error in Gender API call", error)
        throw error;
    }
}

export const GetCityByStateId = async (stateId: number): Promise<ICities[]> => {

    try {
        const response = await fetch(`https://localhost:7150/api/Master/cities/${stateId}`, {
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
        console.error("Error in Gender API call", error)
        throw error;
    }
}
