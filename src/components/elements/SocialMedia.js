import React from "react"

function SocialMedia(props) {
    const faIcon = "fas fa-1x " + props.faIcon
    return(
        <div className="control">
             <a href={props.url} target="blank" className="is-hovered" title={props.text}>
                <div className="tags has-addons">
                    <span className="tag is-dark">{props.text}</span>
                    <span className="tag">
                        <i className={faIcon}></i>
                    </span>
                </div>
            </a>
        </div>
    )
}

export default SocialMedia

