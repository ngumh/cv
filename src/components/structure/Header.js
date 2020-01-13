import React from "react"
import Hero from "../elements/Hero"
import Countdown from "../services/Countdown"


function Header() {
    return(
        <header id="header">
            <Hero />
            <Countdown />
        </header>
    )
}

export default Header