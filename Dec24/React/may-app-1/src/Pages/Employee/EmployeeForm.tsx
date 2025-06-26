import { ChangeEvent, useEffect, useState } from "react";
import { IEmployee, IGenders } from "../../Utils/ServiceInterfaces";
import { GetAllGenders } from "../../Utils/Services/MasterServices";

const EmployeeForm: React.FC = () => {
    const [genders, setGenders] = useState<IGenders[]>([]);
    useEffect(() => {
        GetAllGenders().then((data: IGenders[]) => {
            setGenders(data);
        })
    })

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
                [name]: value
            }
        ))
    }

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
                                value={employee.dateOfBirth}
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
                                onChange={handleChange}
                            >
                                <option key={0} value="0">Please Select</option>
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
                                onChange={handleChange}
                            >
                                <option key={0} value="0">Please Select</option>
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
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">
                        <input type="button" value="Save" className="btn btn-outline-primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeForm;