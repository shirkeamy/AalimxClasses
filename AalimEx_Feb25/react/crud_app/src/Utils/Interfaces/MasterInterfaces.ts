export interface IGenders {
    genderId: number;
    gender: string;
}

export interface ICountries {
    "countryId": number;
    "country": string;
}

export interface IStates {
    "countryId": number;
    "stateId": number;
    "state": string;
}

export interface ICities {
    "stateId": number;
    "cityId": number;
    "city": string;
}