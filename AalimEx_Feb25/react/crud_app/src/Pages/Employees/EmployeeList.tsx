import React, { useEffect } from "react";
import { GetAllEmployees } from "../../Utils/Services/EmployeeSevices";
import { IEmployees } from "../../Utils/Interfaces/EmployeeInterfaces";
import EmployeeForm from "./EmployeeForm";

const EmployeeList: React.FC = () => {

    const [employees, setEmployees] = React.useState<IEmployees[]>([]);

    useEffect(() => {
        GetAllEmployees().then((data: IEmployees[]) => {
            console.log("Employees from API", data);
            setEmployees(data);
        }).catch((error: Error) => {
            console.error("Error in fetching Employees", error);
        })
    }, [])
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>Employee Form</h1>
                    <EmployeeForm />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h1>Employee List</h1>

                    <table className="table table-responsive table-hover">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>gender</th>
                                <th>dateOfBirth</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee: IEmployees) => {
                                return (
                                    <tr>
                                        <td>{employee.employeeId}</td>
                                        <td>{employee.employeeName}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.dateOfBirth.toString()}</td>
                                        <td>{`${employee.state}, ${employee.city}, ${employee.country}`}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}

export default EmployeeList;