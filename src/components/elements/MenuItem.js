import React from "react"

function MenuItem(props) {
    return(
        <a href={props.href} className="navbar-item is-unselectable has-text-black">{props.text}</a>
    )
}

export default MenuItem