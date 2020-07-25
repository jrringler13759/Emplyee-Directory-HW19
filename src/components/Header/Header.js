
import React from "react";
import "./header.css";

function Header () {
    return (
        <div className = "Header">
            <h1>Employee Directory</h1>
            <p>Click the Name or DOB heading to sort the column or use the search box to search by last name</p>
        </div>
        
    );
}

export default Header;