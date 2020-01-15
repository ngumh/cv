import React from 'react'
import Project from '../elements/Project'
import resume from '../../resume.json'
const PetProjects = () => {
    return(
        <div className="section has-background-black-ter">
            <div className="container">
                <h1 className="title has-text-white">Pet Projects</h1>
                <div className="columns">
                    {
                        resume.projects.map((value, index) => {
                            return (
                                <div className="column">
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