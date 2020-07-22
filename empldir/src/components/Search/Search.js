import React from 'react';

function SearchBox (props) {
    return (
        <div>
            <input type = "text" placeholder = "Type Last Name Here" onChange = {(event) => props.searchLastName(event)}></input>
        </div>
    )
}

export default SearchBox;