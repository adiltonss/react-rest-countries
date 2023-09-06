import { useState } from "react";

export default function Header({theme, setTheme}){

    const [buttonText, setBtnText] = useState("Light Mode")


    function dealClick(){
        if(theme === "dark-mode"){
            setTheme("light-mode"); 
            setBtnText("Dark Mode")
        }
        else {
            setTheme("dark-mode")
            setBtnText("Light Mode")
        }
    }

    return(
        <header className="header">
            <nav className="nav">
                <h1>Where in the world?</h1>
                <button onClick={dealClick}>{buttonText}</button>
            </nav>
        </header>
    )
}