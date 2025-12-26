import React, { useEffect, useState } from "react";
import { DeleteEmployee, GetAllEmployees } from "../Utils/Services/EmployeeServices";
import { IEmployees } from "../Utils/Interfaces/EmployeeInterfaces";
import EmployeeForm from "./EmployeeForm";

const EmployeeList: React.FC = () => {

    const [employees, setEmployees] = useState<IEmployees[]>([]);
    const [employeeId, setEmployeeId] = useState< number>(0);
    const [isSaved, setIsSaved] = useState<boolean>(false);

    useEffect(() => {
        GetAllEmployees().then((data) => {
            setEmployees(data);
        }).catch((err: Error) => {
            console.error("Error while fetching employees: ", err.message);
        });
    }, [isSaved]);

    const onDeleteClick = (employeeId: number) => {
        DeleteEmployee(employeeId).then((data) => {
            alert(data);
            // setIsSaved(true);
            setIsSaved(!isSaved);
        }).catch((err: Error) => {
            console.error("Error while deleting employee: ", err.message);
            setIsSaved(false);
        })
    }

    return (
        <>
            <h3>Employee List</h3>
            <div className="row">
                <div className="col-12">
                    <EmployeeForm employeeId={employeeId} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <table className="table tablere-sponsive table-hover">
                        <thead>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                                <th>Employee Code</th>
                                <th>Gender</th>
                                <th>Date of birth</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                employees.map((employee: IEmployees) => {
                                    return (
                                        <tr>
                                            <td>{employee.employeeId}</td>
                                            <td>{employee.employeeName}</td>
                                            <td>{employee.employeeCode}</td>
                                            <td>{employee.gender}</td>
                                            <td>{employee.dateOfBirth}</td>
                                            <td>{employee.emailId}</td>
                                            <td>
                                                <input
                                                    type="button"
                                                    className="btn btn-sm btn-primary mx-2"
                                                    value="Edit"
                                                    onClick={()=>{
                                                        setEmployeeId(employee.employeeId)
                                                    }}    
                                                />
                                                <input
                                                    type="button"
                                                    className="btn btn-sm btn-danger mx-2"
                                                    value="Delete"
                                                    onClick={() => { 
                                                        onDeleteClick(employee.employeeId)
                                                    }}
                                                />
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default EmployeeList;