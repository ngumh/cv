import React from "react"
import SkillsList from "../elements/SkillsList"
import Resume from "../../resume.json"

function Skills() {
    return(
        <section className="section has-background-dark" id="skills">
            <div className="container">
                <h1 className="title has-text-white">Skills</h1>
                <div className="columns">
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-white">
                                <i className="fas fa-3x fa-code"></i>
                            </span>
                            <h2 className="title is-5 has-text-white">Front End</h2>
                        </div>
                        <SkillsList skills = {
                            Resume.skills.filter(skill => skill.keywords.includes('Front End')).reduce((obj,item) => ((obj[item.name] = item.level, obj)),{})
                        } />
                    </div>
                    <div className="column is-6">
                        <div className="has-text-centered">
                            <span className="icon has-text-white">
                                <i className="fas fa-3x fa-laptop-code"></i>
                            </span>
                            <h2 className="title is-5 has-text-white">Back End</h2>
                        </div>
                        <SkillsList skills = {
                            Resume.skills.filter(skill => skill.keywords.includes('Back End')).reduce((obj,item) => ((obj[item.name] = item.level, obj)),{})
                        } />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills