import React from 'react';
import "./search.css";

function SearchBox (props) {
    return (
        <div className = "Search">
            <input type = "text" placeholder = "Type Last Name Here" onChange = {(event) => props.searchLastName(event)}></input>
        </div>
    )
}

export default SearchBox;