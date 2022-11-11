import React from "react";

function Header({handleToggleDarkMode, darkMode}) {
    return ( <div className="header">
        <h1>Notes</h1>
        <button className="button" onClick={() => handleToggleDarkMode((previousDarkMode)=> !previousDarkMode)}>{darkMode?"Light mode":"Dark mode"}</button>
    </div> );
}

export default Header;