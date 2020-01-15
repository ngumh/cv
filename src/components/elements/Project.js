import React from 'react'

function Project(props){
    return (
        <article class="media">
            <div class="media-left"></div>
            <div class="media-content">
                <div class="content">
                    <h5 className="has-text-white is-spaced is-uppercase">{props.title}</h5>
                    <p className="has-text-white">
                        {props.description}
                    </p>
                    <div>
                        <a href={props.url} className="button is-rounded has-text-white is-info">Open on Github </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Project