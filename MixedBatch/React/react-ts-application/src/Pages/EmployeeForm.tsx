import React, { ChangeEvent, InputEventHandler, useEffect, useState } from "react";
import { GetGenders, GetCountries, GetStates, GetCities } from "../Utils/Services/MasterServices";
import { ICity, ICountry, IGender, IState } from "../Utils/Interfaces/MasterInterfaces";
import { IEmployee } from "../Utils/Interfaces/EmployeeInterfaces";
import { GetEmployeeById, PostEmployee, PutEmployee } from "../Utils/Services/EmployeeServices";

interface IEmployeeFormProps {
    employeeId: number;
}

const EmployeeForm: React.FC<IEmployeeFormProps> = (props: IEmployeeFormProps) => {
    const { employeeId }: IEmployeeFormProps = props;
    console.log("Employee Form component rendered with employeeId: ", employeeId);
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

    const initialEmployeeState: IEmployee = {
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

    const [employee, setEmployee] = useState<IEmployee>(initialEmployeeState);

    useEffect(() => {
        if (employeeId > 0) {
            GetEmployeeById(employeeId).then((data: IEmployee) => {
                setEmployee(data);
            }).catch((err: Error) => {
                console.error("Error while fetching employee by id: ", err.message);
            })
        }
    }, [employeeId]);

    const onSaveClick = () => {
        if (employee.employeeId > 0) {
            PutEmployee(employee).then((data: string) => {
                alert(data);
            }).catch((err: Error) => {
                console.error("Error while updating employee: ", err.message);
            })
        } else {
            PostEmployee(employee).then((data: string) => {
                alert(data);
            }).catch((err: Error) => {
                console.error("Error while updating employee: ", err.message);
            })
        }
    }

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name, type } = e.target;
        setEmployee((prev)=>({
            ...prev,
            [name]:  type === "radio" ? Number(value) : value
        }))
    }

    return (
        <>

            <div className="row">
                <div className="col-12">
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="employeeId">Employee Id</label>
                            <input type="text" className="form-control" id="employeeId"
                                value={employee.employeeId}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        employeeId: parseInt(value)
                                    })
                                }}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="text" className="form-control" id="employeeName"
                                value={employee.employeeName}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        employeeName: value
                                    })
                                }}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="employeeCode">Employee Code</label>
                            <input type="text" className="form-control" id="employeeCode"
                                value={employee.employeeCode}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        employeeCode: value
                                    })
                                }}
                            />
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
                                                <input type="radio" name="genderId" id={`gender-${gender.genderId}`}
                                                    value={employee.genderId}
                                                    checked={employee.genderId === gender.genderId}
                                                    onChange={onChange}
                                                />
                                                <label htmlFor={`gender-${gender.genderId}`} className="form-check-lable">{gender.gender}</label>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="col-4">
                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <input type="date" className="form-control" id="dateOfBirth"
                                value={employee.dateOfBirth.toISOString().split("T")[0]}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        dateOfBirth: new Date(value)
                                    })
                                }}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="emailId">Email Id</label>
                            <input type="text" className="form-control" id="emailId"
                                value={employee.emailId}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        emailId: value
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="telephone">Telephone</label>
                            <input type="text" className="form-control" id="telephone"
                                value={employee.telephone}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        telephone: value
                                    })
                                }}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="jobTitle">Job Title</label>
                            <input type="text" className="form-control" id="jobTitle"
                                value={employee.jobTitle}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        jobTitle: value
                                    })
                                }}
                            />
                        </div>
                        <div className="col-4">
                            <label htmlFor="salary">Salary</label>
                            <input type="text" className="form-control" id="salary"
                                value={employee.salary}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        salary: parseInt(value)
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-12">
                            <label htmlFor="address">Address</label>
                            <textarea id="address" className="form-control" rows={3}
                                value={employee.address}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        address: value
                                    })
                                }}
                            ></textarea>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-4">
                            <label htmlFor="countryId">Country</label>
                            <select id="countryId" className="form-control"
                                value={employee.countryId}
                                onChange={(e) => {
                                    const value = e.target.value
                                    onCountryChange(parseInt(value));
                                    setEmployee({
                                        ...employee,
                                        countryId: parseInt(value)
                                    })
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
                                value={employee.stateId}
                                onChange={(e) => {
                                    const value = e.target.value
                                    onStateChange(parseInt(value));
                                    setEmployee({
                                        ...employee,
                                        stateId: parseInt(value)
                                    })
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
                            <select id="cityId" className="form-control"
                                value={employee.cityId}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setEmployee({
                                        ...employee,
                                        cityId: parseInt(value)
                                    })
                                }}
                            >
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
                            <input
                                type="button"
                                value="Save Employee"
                                className="btn btn-primary mt-3"
                                id="btnSaveEmployee"
                                onClick={() => { onSaveClick() }}
                            />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>

        </>
    )
}

export default EmployeeForm;