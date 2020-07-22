import React from "react";
import header from "./header.css";

function Header () {
    return (
        <div className = "header">
            <h1>Employee Directory</h1>
            <p>Click the Name or DOB heading to sort the column or use the search box to search by Last</p>
        </div>
    );
}

export default Header;