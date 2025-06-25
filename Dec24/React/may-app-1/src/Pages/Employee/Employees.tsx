import { useEffect, useState } from "react";
import { IEmployee, IEmployees } from "../../Utils/ServiceInterfaces";
import { GetAllEmployees, GetEmployeeById } from "../../Utils/Services/EmployeeServices";
import EmployeeForm from "./EmployeeForm";

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<IEmployees[]>([])
    useEffect(() => {
        GetAllEmployees()
            .then((data: IEmployees[]) => {
                setEmployees(data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const handleOnEdit = (employeeId: number) => {
        GetEmployeeById(employeeId).then((data: IEmployee) => {
            console.log(data);
        })
    }

    return (
        <>
            <EmployeeForm />
            <table className="table table-hover table-responsive">
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Employee Code</th>
                        <th>Gender</th>
                        <th>Date of birth</th>
                        <th>Email Id</th>
                        <th>Telephone</th>
                        <th>Job title</th>
                        <th>Salary</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee: IEmployees, index: number) => {
                            return (
                                <tr key={`employee-row-${index}`}>
                                    <td>{employee.employeeId}</td>
                                    <td>{employee.employeeName}</td>
                                    <td>{employee.employeeCode}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.dateOfBirth}</td>
                                    <td>{employee.emailId}</td>
                                    <td>{employee.telephone}</td>
                                    <td>{employee.jobTitle}</td>
                                    <td>{employee.salary}</td>
                                    <td>{`${employee.address}, ${employee.city}, ${employee.state}, ${employee.country}`}</td>
                                    <td>
                                        <input
                                            type="button"
                                            value="Edit"
                                            className="btn btn-sm btn-outline-primary"
                                            onClick={() => { handleOnEdit(employee.employeeId) }}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </>
    )
}

export default Employees;