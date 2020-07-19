import React from "react";


function Table (props) {
    return (
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>ID</th>
                    <th scope="col">Image</th>
                    <th scope="col">Name
                        <button onclick = {props.sortEmplByName} className = "btn">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                        </button></th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">DOB
                        <button onclick = {props.sortEmplByDOB} className = "btn">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                            </svg>
                        </button></th>
                </tr>
            </thead>
            <tbody>
                {props.employees.map(empl => {
                    return (
                        <tr key={empl.id}>
                            <td>{empl.id}</td>
                            <td><img src = {empl.image} alt = "employee-img" /></td>
                            <td>{empl.name}</td>
                            <td>{empl.phone}</td>
                            <td>{empl.email}</td>
                            <td>{empl.dob}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table;