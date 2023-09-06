import React from "react"
import Header from "./Header"

export default function Layout({children, theme, setTheme, currentCountry, setCurrentCountry}){
    return( 
        <>
            <Header theme={theme} setTheme={setTheme}/>
            <main>
                {React.cloneElement(children, {currentCountry, setCurrentCountry})}
            </main>
        </>
    )
}