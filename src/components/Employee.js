import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import employeeService from "../services/employeeService"


const Employee = () =>{
    const[employees, setEmployees] = useState([])

    useEffect(
        () =>{
            refreshEmployeeTable();
        }
    )

    const refreshEmployeeTable = () =>{
        employeeService.getEmployees()
            .then(
                response =>{
                    setEmployees(response.data)
                }
            )
            .catch(
                error =>{
                    console.error("An Error Occured.", error)
                }
            )
    }

    const deleteEmployee = (employeeId) =>{
        employeeService.deleteEmployee(employeeId)
        .then(
            response =>{
                console.log("Succesfully deleted employee!")
                refreshEmployeeTable();
            }
        )
        .catch(
            error =>{
                console.error("Something went wrong!", error)
            }
        )
    }

    return(
        <div className="container">
            <h3>List of Employees</h3>
            <div>
                <table className="table table-hover table-light table-bordered border-dark">
                    <thead>
                        <tr className="table-danger table-bordered border-dark">
                            <td>Name</td>
                            <td>Location</td>
                            <td>Department</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        employees.map(
                            employee =>(
                                <tr key={employee.employeeId}>
                                    <td>{employee.name}</td>
                                    <td>{employee.location}</td>
                                    <td>{employee.department}</td>
                                    <td>
                                        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                                            <Link className= "btn btn-primary" to={`/edit/${employee.employeeId}`}>Update</Link>
                                            <button className= "btn btn-danger" onClick={() =>deleteEmployee(employee.employeeId)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Employee