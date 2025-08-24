import React, { useEffect } from "react";
import { DeleteEmployee, GetAllEmployees } from "../../Utils/Services/EmployeeSevices";
import { IEmployees } from "../../Utils/Interfaces/EmployeeInterfaces";
import EmployeeForm from "./EmployeeForm";

const EmployeeList: React.FC = () => {

    const [employees, setEmployees] = React.useState<IEmployees[]>([]);
    const [employeeId, setEmployeeId] = React.useState<number>(0);
    const [isSaved, setIsSaved] = React.useState<boolean>(false);

    useEffect(() => {
        GetAllEmployees().then((data: IEmployees[]) => {
            console.log("Employees from API", data);
            setEmployees(data);
            setIsSaved(false);
        }).catch((error: Error) => {
            console.error("Error in fetching Employees", error);
        })
    }, [isSaved])

    const onDeleteClick = (employeeId: number) => {
        DeleteEmployee(employeeId).then((data: string)=>{
            alert(data);
            setIsSaved(true);
        });
    }

    return (
        <>
            <div className="row">
                <div className="col-12">
                    <h1>Employee Form</h1>
                    <EmployeeForm employeeId={employeeId} setIsSaved={setIsSaved} />
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
                                <th>Action</th>
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
                                        <td>{`${employee.address} ${employee.state}, ${employee.city}, ${employee.country}`}</td>
                                        <td>
                                            <input
                                                type="button"
                                                value="Edit"
                                                className="btn btn-sm btn-primary"
                                                onClick={() => {
                                                    setEmployeeId(employee.employeeId)
                                                }}
                                            />
                                            <input
                                                type="button"
                                                value="Delete"
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => {
                                                    onDeleteClick(employee.employeeId)
                                                }}
                                            />
                                        </td>
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