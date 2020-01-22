import React from 'react'
import Project from '../elements/Project'
import resume from '../../resume.json'
const PetProjects = () => {
    return(
        <div className="section has-background-black-ter">
            <div className="container">
                <h1 className="title has-text-white">Pet Projects</h1>
                <div className="has-text-white">
                    <p>In my free time, I work on some pet projects: <a href="https://github.com/ngumh" className="is-hovered has-text-info">https://github.com/ngumh</a></p>
                </div>
                <br />
                <div className="columns">
                    {
                        resume.projects.map((value, index) => {
                            return (
                                <div className="column" key={index}>
                                    <div className="box has-background-grey-darker">
                                        <Project
                                            title={value.title}
                                            url={value.repository}
                                            description={value.Description}
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PetProjects