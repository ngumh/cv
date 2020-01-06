import React from 'react'

function Language(props) {
    return (
        <li>
            {props.lang} : {props.fluency} <br/>
            {props.ielts ? "IELTS : " + props.ielts :''}
            <hr />
        </li>
    )
}


export default Language