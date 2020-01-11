import React from "react"

function SocialMedia(props) {
    const faIcon = "fas fa-1x " + props.faIcon
    const [dimensions, setDimensions] = React.useState({ 
        width: window.innerWidth
    })
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
              width: window.innerWidth
            })}
        window.addEventListener('resize', handleResize)
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return(
        <div className="control">
            <a href={props.url} target="blank" className="is-hovered" title={props.text}>
                <div className="tags has-addons">
                    {dimensions.width > 417 ? <span className="tag is-dark">{props.text}</span> : ''}
                    <span className="tag">
                        <i className={faIcon}></i>
                    </span>
                </div>
            </a>
        </div>
    )
}

export default SocialMedia

