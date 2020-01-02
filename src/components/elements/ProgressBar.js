import React from "react"

function ProgressBar(props) {
    return(
        <div>
            <span className="title is-5 has-text-white">{props.text}</span>
            <span className="subtitle is-6 has-text-white skill-percentage">{props.percentage}%</span>
            <progress className="progress is-success" value={props.percentage} max="100">{props.percentage}%</progress>
        </div>
    )
}

export default ProgressBar