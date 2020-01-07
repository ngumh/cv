import React from "react"
import Projects from '../elements/Projects'
import Timeline from "../elements/Timeline"

function Experience() {
    return(
        <section className="section has-background-grey-dark" id="experience">
            <div className="container has-text-white">
                <h1 className="title has-text-white">Experiences</h1>
                <Timeline />
            </div>
        </section>
    )
}

export default Experience