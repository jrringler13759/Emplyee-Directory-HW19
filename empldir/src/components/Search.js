import React from 'react';

function SearchBox (props) {
    return (
        <div>
            <input type = "text" placeholder = "Type Search Term Here" onChange = {(event) => props.searchEmpl(event)}></input>
        </div>
    )
}

export default SearchBox;