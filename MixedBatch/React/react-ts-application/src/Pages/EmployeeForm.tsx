import React, { useEffect, useState } from "react";
import { GetGenders, GetCountries, GetStates, GetCities } from "../Utils/Services/MasterServices";
import { ICity, ICountry, IGender, IState } from "../Utils/Interfaces/MasterInterfaces";

const EmployeeForm: React.FC = () => {
    const [genders, setGenders] = useState<IGender[]>([]);
    const [countries, setCountries] = useState<ICountry[]>([]);
    const [states, setStates] = useState<IState[]>([]);
    const [cities, setCites] = useState<ICity[]>([]);
    useEffect(() => {
        GetGenders().then((data: IGender[]) => {
            setGenders(data);
        }).catch((err: Error) => {
            console.error("Error while fetching genders: ", err.message);
        })

        GetCountries().then((data: ICountry[]) => {
            setCountries(data);
        }).catch((err: Error) => {
            console.error("Error while fetching genders: ", err.message);
        })
    }, []);

    const onCountryChange = (countryId: number) => {
        GetStates(countryId).then((data: IState[]) => {
            setStates(data);
        }).catch((err: Error) => {
            console.error("Error while fetching states: ", err.message);
        })
    }

    const onStateChange = (stateId: number) => {
        GetCities(stateId).then((data: ICity[]) => {
            setCites(data);
        }).catch((err: Error) => {
            console.error("Error while fetching states: ", err.message);
        })
    }

    return (
        <>

            <div className="row">
                <div className="col-12">
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="employeeId">Employee Id</label>
                            <input type="text" className="form-control" id="employeeId" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="text" className="form-control" id="employeeName" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="employeeCode">Employee Code</label>
                            <input type="text" className="form-control" id="employeeCode" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="employeeGender">Employee Gender</label>
                            <div>
                                {
                                    genders.map((gender: IGender) => {
                                        return (
                                            <div className="form-check form-check-inline">
                                                <input type="radio" name="genderId" id={`gender-${gender.genderId}`} />
                                                <label htmlFor={`gender-${gender.genderId}`} className="form-check-lable">{gender.gender}</label>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="col-4">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input type="date" className="form-control" id="dateOfBirth" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="emailId">Email Id</label>
                            <input type="text" className="form-control" id="emailId" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="text" className="form-control" id="telephone" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input type="text" className="form-control" id="jobTitle" />
                        </div>
                        <div className="col-4">
                            <label htmlFor="salary">Salary</label>
                            <input type="text" className="form-control" id="salary" />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="address">Address</label>
                            <textarea id="address" className="form-control" rows={3}></textarea>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="countryId">Country</label>
                            <select id="countryId" className="form-control"
                                onChange={(e) => {
                                    const value = e.target.value
                                    onCountryChange(parseInt(value));
                                }}
                            >
                                <option value="0">Please Select</option>
                                {
                                    countries.map((country: ICountry) => {
                                        return (
                                            <option value={country.countryId}>{country.country}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="stateId">State</label>
                            <select id="stateId" className="form-control"
                                onChange={(e) => {
                                    const value = e.target.value
                                    onStateChange(parseInt(value));
                                }}
                            >
                                <option value="0">Please Select</option>
                                {
                                    states.map((state: IState) => {
                                        return (
                                            <option value={state.stateId}>{state.state}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="cityId">City</label>
                            <select id="cityId" className="form-control">
                                <option value="0">Please Select</option>
                                {
                                    cities.map((city: ICity) => {
                                        return (
                                            <option value={city.cityId}>{city.city}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12 text-center">
                            <input type="button" value="Save Employee" className="btn btn-primary mt-3" id="btnSaveEmployee" />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

        </>
    )
}

export default EmployeeForm;