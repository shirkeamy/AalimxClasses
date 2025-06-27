import { useEffect, useState } from "react";
import { IEmployee, IEmployees } from "../../Utils/ServiceInterfaces";
import { DeleteEmployee, GetAllEmployees, GetEmployeeById } from "../../Utils/Services/EmployeeServices";
import EmployeeForm from "./EmployeeForm";

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<IEmployees[]>([])
    const [employeeId, setEmployeeId] = useState<number>(0)
    const [isSaved, setIsSaved] = useState<boolean>(false)
    useEffect(() => {
        GetAllEmployees()
            .then((data: IEmployees[]) => {
                setEmployees(data);
                setIsSaved(false);
                setEmployeeId(0);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [isSaved])

    const onDeleteClick = (employeeId: number) => {
        DeleteEmployee(employeeId).then((data: string) => {
            alert(data);
            setIsSaved(true);
        }).catch((error) => {
            alert(error);
        })
    }

    return (
        <>
            <EmployeeForm employeeId={employeeId} setIsSaved={setIsSaved} />
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
                                            onClick={() => { setEmployeeId(employee.employeeId) }}
                                        />
                                        <input
                                            type="button"
                                            value="Delete"
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => { onDeleteClick(employee.employeeId) }}
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