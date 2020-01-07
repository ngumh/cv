import React from "react"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import ForeignLang from "../sections/ForeignLang"

function Content() {
    return(
        <main>
            <AboutMe />
            <Skills />
            <ForeignLang />
            <Experience />
        </main>
    )
}

export default Content