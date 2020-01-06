import React from 'react'
import Resume from '../../resume.json'
import Language from '../elements/Language'

function ForeignLanguage() {
    return (
        <section className="section has-background-dark">
            <div className="container has-text-white">
                <h1 className="title has-text-white">Foreign Language</h1>
                <ul>
                    {
                        Resume.languages.map((value,index) => {
                            return <Language key={index} lang= {value.language} fluency={value.fluency} ielts={value.ielts}  />
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default ForeignLanguage