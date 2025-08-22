import React, { ChangeEvent, useEffect, useState } from "react";
import { IGenders, ICountries, IStates, ICities } from "../../Utils/Interfaces/MasterInterfaces";
import { GenderSevice, GetAllCitiesByState, GetAllCoutries, GetAllStatesByCountry } from "../../Utils/Services/MasterServices";
import { IEmployee } from "../../Utils/Interfaces/EmployeeInterfaces";
import { PostEmployee } from "../../Utils/Services/EmployeeSevices";

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

    const initialEmployee: IEmployee = {
        employeeId: 0,
        employeeName: "",
        employeeCode: "",
        genderId: 0,
        dateOfBirth: new Date(),
        emailId: "",
        telephone: "",
        jobTitle: "",
        salary: 0,
        address: "",
        cityId: 0,
        stateId: 0,
        countryId: 0
    }

    const [employee, setEmployee] = useState<IEmployee>(initialEmployee)

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { value, name, type } = e.target;
        setEmployee((prev)=>({
            ...prev,
            [name]:
                type === "radio" ? Number(value) :
                type === "date" ? new Date(value) :
                value
        }))
    }

    const onSaveClick = () => {
        PostEmployee(employee).then((data: string)=>{
            console.log("employee", data);
            alert(data);
            setEmployee(initialEmployee);
        }).catch((error: Error) => {
            console.error("Error in saving employee", error);
            alert(error.message);
        })
    }

    return (
        <>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                    <div className="row mb-3">
                        <div className="col-4">
                            <label htmlFor="employeeId">Employee Id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeId"
                                name="employeeId"
                                value={employee.employeeId}
                                onChange={handleChange}
                                disabled
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeName"
                                name="employeeName"
                                value={employee.employeeName}
                                // onChange={(e)=>{
                                //     // const v = e.target.value;
                                //     // const id = e.target.id;
                                //     const { value } = e.target;
                                //     setEmployee({
                                //         ...employee,
                                //         employeeName: value
                                //     })
                                // }}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="employeeCode">Employee Code</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeCode"
                                name="employeeCode"
                                value={employee.employeeCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <label htmlFor="radGender">Gender</label>
                            <div>
                                {
                                    genders.map((gender: IGenders) => {
                                        return (
                                            <div className="form-check form-check-inline" key={`gender-rad-${gender.genderId}`}>
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="genderId"
                                                    id={`gender-${gender.genderId}`}
                                                    value={gender.genderId}
                                                    checked={employee.genderId === gender.genderId}
                                                    onChange={handleChange}
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
                                name="dateOfBirth"
                                value={employee.dateOfBirth.toISOString().split('T')[0]}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="emailId">Email Id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="emailId"
                                name="emailId"
                                value={employee.emailId}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="text"
                                className="form-control"
                                id="telephone"
                                name="telephone"
                                value={employee.telephone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobTitle"
                                name="jobTitle"
                                value={employee.jobTitle}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="salary">Salary</label>
                            <input
                                type="text"
                                className="form-control"
                                id="salary"
                                name="salary"
                                value={employee.salary}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="address">Address</label>
                            {/* <input
                                type="text"
                                className="form-control"
                                id="address"
                            /> */}
                            <textarea
                                name="address"
                                className="form-control"
                                id="address"
                                value={employee.address}
                                onChange={handleChange}
                            >
                            </textarea>
                        </div>

                    </div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <label htmlFor="countryId">Country</label>
                            <select name="countryId" id="countryId" className="form-select"
                                value={employee.countryId}
                                onChange={(e) => {
                                    const { value } = e.target;
                                    onCountryChange(parseInt(value));
                                    handleChange(e)
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
                                value={employee.stateId}
                                onChange={(e) => {
                                    const { value } = e.target;
                                    onStateChange(parseInt(value));
                                    handleChange(e)
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
                            <select name="cityId" id="stateId" className="form-select"
                                value={employee.cityId}
                                onChange={handleChange}
                            >
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
                    <hr />
                    <div className="row">
                        <div className="col-12 text-center">
                            <input type="button" value="Save" className="btn btn-primary"
                                onClick={onSaveClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default EmployeeForm;