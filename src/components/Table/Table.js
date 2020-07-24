import React from "react";
import "./table.css"


function Table (props) {
    return (
        <div className = "TableData"> 
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Image</th>
                        <th scope="col">
                            <button onClick = {props.sortEmplByName} className = "btn">Name  
                            </button></th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">
                            <button onClick = {props.sortEmplByDOB} className = "btn">DOB
                            </button></th>
                    </tr>
                </thead>
                <tbody>
                    {props.employees.map(empl => {
                        return (
                            <tr key={empl.id}>
                                <td>{empl.id}</td>
                                <td><img src = {empl.image} alt = "employee-img" /></td>
                                <td>{empl.firstName} {empl.lastName}</td>
                                <td>{empl.phone}</td>
                                <td>{empl.email}</td>
                                <td>{empl.dob}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>   
    )   
}

export default Table;