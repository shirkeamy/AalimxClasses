export interface IGenders {
    genderId: number;
    gender: string;
}

export interface IEmployee {
    employeeId: number;
    employeeName: string;
    employeeCode: string;
    genderId: number;
    dateOfBirth: string;
    emailId: string;
    telephone: string;
    jobTitle: string;
    salary: number;
    address: string;
    cityId: number;
    stateId: number;
    countryId: number;
}

export interface ICountries {
    countryId: number;
    country: string;
}

export interface IStates {
    stateId: number;
    state: string;
    countryId: number;
}

export interface ICities {
    cityId: number;
    city: string;
    stateId: number;
}

export interface IEmployees {
    employeeId: number;
    employeeName: string;
    employeeCode: string;
    gender: string;
    dateOfBirth: string;
    emailId: string;
    telephone: string;
    jobTitle: string;
    salary: number;
    address: string;
    city: string;
    state: string;
    country: string;
}