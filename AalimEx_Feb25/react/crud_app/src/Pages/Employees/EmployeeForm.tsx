import React, { useEffect, useState } from "react";
import { IGenders, ICountries, IStates, ICities } from "../../Utils/Interfaces/MasterInterfaces";
import { GenderSevice, GetAllCitiesByState, GetAllCoutries, GetAllStatesByCountry } from "../../Utils/Services/MasterServices";

const EmployeeForm: React.FC = () => {

    const [genders, setGenders] = useState<IGenders[]>([]);
    const [countries, setCountries] = useState<ICountries[]>([]);
    const [states, setStates] = useState<IStates[]>([]);
    const [cities, setCities] = useState<ICities[]>([]);

    useEffect(() => {
        GenderSevice().then((data: IGenders[]) => {
            setGenders(data);
        }).catch((error: Error) => {
            setGenders([]);
            console.error("Error fetching", error);
        })

        GetAllCoutries().then((data: ICountries[]) => {
            setCountries(data);
        }).catch((error: Error) => {
            console.error("Error in fetching Country", error);
        })

    }, [])

    const onCountryChange = (countryId: number) => {
        GetAllStatesByCountry(countryId).then((data: IStates[]) => {
            setStates(data);
        }).catch((error: Error) => {
            console.error("Error in fetching States", error);
        })
    }

    const onStateChange = (stateId: number) => {
        GetAllCitiesByState(stateId).then((data: ICities[]) => {
            setCities(data);
        }).catch((error: Error) => {
            console.error("Error in fetching States", error);
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="employeeId">Employee Id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeId"
                                disabled
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeName"
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="employeeCode">Employee Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeCode"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="radGender">Gender</label>
                            <div>
                                {
                                    genders.map((gender: IGenders) => {
                                        return (
                                            <div className="form-check" key={`gender-rad-${gender.genderId}`}>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="genderId"
                                                    id={`gender-${gender.genderId}`}
                                                />
                                                <label className="form-check-label" htmlFor={`gender-${gender.genderId}`}>
                                                    {gender.gender}
                                                </label>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="col-4">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dateOfBirth"
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="emailId">Email Id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="emailId"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="telephone"
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobTitle"
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="salary">Salary</label>
                            <input
                                type="text"
                                className="form-control"
                                id="salary"
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="countryId">Country</label>
                            <select name="countryId" id="countryId" className="form-select"
                                onChange={(e) => {
                                    const {value} = e.target;
                                    onCountryChange(parseInt(value));
                                }}
                            >
                                <option value="0">Please Select</option>
                                {countries.map((country: ICountries) => {
                                    return (
                                        <option key={`country-${country.countryId}`} value={country.countryId}>
                                            {country.country}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="stateId">State</label>
                            <select name="stateId" id="stateId" className="form-select"
                                onChange={(e)=>{
                                    const {value} = e.target;
                                    onStateChange(parseInt(value));
                                }}
                            >
                                <option value="0">Please Select</option>
                                {states.map((state: IStates) => {
                                    return (
                                        <option key={`state-${state.stateId}`} value={state.stateId}>
                                            {state.state}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="col-4">
                            <label htmlFor="cityId">City</label>
                            <select name="cityId" id="stateId" className="form-select">
                                <option value="0">Please Select</option>
                                {cities.map((city: ICities) => {
                                    return (
                                        <option key={`city-${city.cityId}`} value={city.cityId}>
                                            {city.city}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <input type="button" value="Save" className="btn btn-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default EmployeeForm;