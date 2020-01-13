import React from "react"
import AboutMe from "../sections/AboutMe"
import Skills from "../sections/Skills"
import Experience from "../sections/Experience"
import ForeignLang from "../sections/ForeignLang"
import PetProjects from "../sections/PetProject"

function Content() {
    return(
        <main>
            <AboutMe />
            <Skills />
            <ForeignLang />
            <Experience />
            <PetProjects />
        </main>
    )
}

export default Content