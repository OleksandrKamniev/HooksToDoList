import React from 'react';

const SearchBox = (props) => {
    return(
        <input className="inputSearchBox"
            type="text"
            id="searchInput"
            placeholder="Search..."
            value={props.searchText}
            onChange={props.handleSearchChange}
        />
    )
}
export default SearchBox;
