import React from "react";

function Header({handleToggleDarkMode}) {
    return ( <div className="header">
        <h1>Notes</h1>
        <button className="button" onClick={() => handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)}>Toggle mode</button>
    </div> );
}

export default Header;