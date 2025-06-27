import { ChangeEvent, useEffect, useState } from "react";
import { ICities, ICountries, IEmployee, IGenders, IStates } from "../../Utils/ServiceInterfaces";
import { GetAllCountries, GetAllGenders, GetCityByStateId, GetStateByCountryId } from "../../Utils/Services/MasterServices";
import { GetEmployeeById, SaveEmployee, UpdateEmployee } from "../../Utils/Services/EmployeeServices";

interface IEmployeeFormProps {
    employeeId: number;
    setIsSaved: React.Dispatch<React.SetStateAction<boolean>>
}

const EmployeeForm: React.FC<IEmployeeFormProps> = (props: IEmployeeFormProps) => {
    const { employeeId, setIsSaved }: IEmployeeFormProps = props;
    const [genders, setGenders] = useState<IGenders[]>([]);
    const [countries, setCountries] = useState<ICountries[]>([]);
    const [states, setStates] = useState<IStates[]>([]);
    const [cities, setCities] = useState<ICities[]>([]);
    useEffect(() => {
        GetAllGenders().then((data: IGenders[]) => {
            setGenders(data);
        })
        GetAllCountries().then((data: ICountries[]) => {
            setCountries(data)
        })
    }, [])

    const initialEmployee: IEmployee = {
        employeeId: 0,
        employeeName: "",
        employeeCode: "",
        genderId: 0,
        dateOfBirth: "",
        emailId: "",
        telephone: "",
        jobTitle: "",
        salary: 0,
        address: "",
        cityId: 0,
        stateId: 0,
        countryId: 0
    }
    const [employee, setEmployee] = useState<IEmployee>(initialEmployee);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setEmployee((rest) => (
            {
                ...rest,
                [name]: type === "radio" ? Number(value) : value
            }
        ))
    }

    const onCoutryChange = (countryId: number) => {
        GetStateByCountryId(countryId).then((data: IStates[]) => {
            setStates(data)
        })
    }

    const onStateChange = (stateId: number) => {
        GetCityByStateId(stateId).then((data: ICities[]) => {
            setCities(data)
        })
    }

    const handleSaveClick = () => {
        if (employee.employeeId > 0) {
            UpdateEmployee(employee).then((data) => {
                alert(data)
                setIsSaved(true);
                setEmployee(initialEmployee);
            })
        }
        else {
            SaveEmployee(employee).then((data) => {
                alert(data)
                setIsSaved(true);
                setEmployee(initialEmployee);
            })
        }
    }


    useEffect(() => {
        if (employeeId > 0) {
            GetEmployeeById(employeeId).then((data: IEmployee) => {
                setEmployee(data);
                onCoutryChange(data.countryId);
                onStateChange(data.stateId);
            })
        }
    }, [employeeId])


    return (
        <div className="row m-5">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="employeeId" className="form-label">Employee ID:</label>
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
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="employeeName" className="form-label">Employee Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="employeeName"
                                name="employeeName"
                                value={employee.employeeName}
                                onChange={(e) => {
                                    setEmployee((rest) => (
                                        {
                                            ...rest,
                                            employeeName: e.target.value
                                        }
                                    ))
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="employeeCode" className="form-label">Employee Code:</label>
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
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label className="form-label">Gender:</label>
                            <div>
                                {genders.map((gender: IGenders) => (
                                    <div className="form-check form-check-inline" key={gender.genderId}>
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id={`gender-${gender.genderId}`}
                                            name="genderId"
                                            value={gender.genderId}
                                            checked={employee.genderId === gender.genderId}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor={`gender-${gender.genderId}`}>
                                            {gender.gender}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="dateOfBirth" className="form-label">Date of Birth:</label>
                            <input
                                type="date"
                                className="form-control"
                                id="dateOfBirth"
                                name="dateOfBirth"
                                value={employee.dateOfBirth ? employee.dateOfBirth.split("T")[0] : ""}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="emailId" className="form-label">Email ID:</label>
                            <input
                                type="email"
                                className="form-control"
                                id="emailId"
                                name="emailId"
                                value={employee.emailId}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="mb-3">
                            <label htmlFor="telephone" className="form-label">Telephone:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="telephone"
                                name="telephone"
                                value={employee.telephone}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-4">
                        <div className="mb-3">
                            <label htmlFor="jobTitle" className="form-label">Job Title:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="jobTitle"
                                name="jobTitle"
                                value={employee.jobTitle}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="mb-3">
                            <label htmlFor="salary" className="form-label">Salary:</label>
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
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="address" className="form-label">Address:</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                value={employee.address}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="countryId" className="form-label">Country:</label>
                            <select
                                className="form-select"
                                id="countryId"
                                name="countryId"
                                value={employee.countryId}
                                onChange={(e) => {
                                    handleChange(e);
                                    const selectedCountryId = Number(e.target.value);
                                    onCoutryChange(selectedCountryId);
                                }}
                            >
                                <option key={0} value="0">Please Select</option>
                                {
                                    countries.map((country: ICountries) => {
                                        return (
                                            <option key={`coutry-${country.countryId}`} value={country.countryId}>{country.country}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="stateId" className="form-label">State:</label>
                            <select
                                className="form-select"
                                id="stateId"
                                name="stateId"
                                value={employee.stateId}
                                onChange={(e) => {
                                    handleChange(e);
                                    const selectedStateId = Number(e.target.value);
                                    onStateChange(selectedStateId);
                                }}
                            >
                                <option key={0} value="0">Please Select</option>
                                {
                                    states.map((state: IStates) => {
                                        return (
                                            <option key={`state-${state.stateId}`} value={state.stateId}>{state.state}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-3">
                            <label htmlFor="cityId" className="form-label">City:</label>
                            <select
                                className="form-select"
                                id="cityId"
                                name="cityId"
                                value={employee.cityId}
                                onChange={handleChange}
                            >
                                <option key={0} value="0">Please Select</option>
                                {
                                    cities.map((city: ICities) => {
                                        return (
                                            <option key={`city-${city.cityId}`} value={city.cityId}>{city.city}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <input
                            type="button"
                            value="Save"
                            className="btn btn-outline-primary"
                            onClick={handleSaveClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeForm;