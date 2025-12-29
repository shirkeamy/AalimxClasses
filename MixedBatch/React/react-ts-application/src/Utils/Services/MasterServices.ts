import { ICity, ICountry, IGender, IState } from "../Interfaces/MasterInterfaces";

export const GetGenders = async (): Promise<IGender[]> => {
    const response = await fetch("https://localhost:7150/api/Master/genders", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(!response.ok) {
        throw new Error("Failed to fetch genders");
    }

    const data: IGender[] = await response.json();

    return data;
}

export const GetCountries = async (): Promise<ICountry[]> => {
    const response = await fetch("https://localhost:7150/api/Master/countries", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(!response.ok) {
        throw new Error("Failed to fetch Countries");
    }

    const data: ICountry[] = await response.json();

    return data;
}

export const GetStates = async (countryId: number): Promise<IState[]> => {
    const response = await fetch(`https://localhost:7150/api/Master/states/${countryId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(!response.ok) {
        throw new Error("Failed to fetch States");
    }

    const data: IState[] = await response.json();

    return data;
}

export const GetCities = async (stateId: number): Promise<ICity[]> => {
    const response = await fetch(`https://localhost:7150/api/Master/cities/${stateId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(!response.ok) {
        throw new Error("Failed to fetch Cities");
    }

    const data: ICity[] = await response.json();

    return data;
}