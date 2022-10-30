import React from "react";


function Search({handleSearchNote}) {
    return ( <div className="search">
        <button className="search-button" size="1.3em">O</button>
        <input onChange={(event) => handleSearchNote(event.target.value)} type="text" placeholder="Type to search..."/>
    </div> );
}

export default Search;