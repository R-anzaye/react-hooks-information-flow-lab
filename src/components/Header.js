import React from "react"

function Header({onDarkModeClick}){
    return (
        <header>
            <h2></h2>
            <button onClick={onDarkModeClick}>
                {isDarkMode ? "Dark" : "Light"} Mode
            </button>
            </header>
    )}

    export default Header