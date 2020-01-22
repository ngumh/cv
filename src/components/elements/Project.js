import React from 'react'

function Project(props){
    return (
        <article className="media">
            <div className="media-left"></div>
            <div className="media-content">
                <div className="content">
                    <h6 className="has-text-info is-spaced is-uppercase">{props.title}</h6 >
                    <p className="has-text-white">
                        {props.description}
                    </p>
                    <div className="has-text-right  ">
                        <a href={props.url} className="button is-rounded has-text-white is-info">Open on Github </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Project