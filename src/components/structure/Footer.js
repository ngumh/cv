import React from "react"

function Footer() {
    return (
        <footer className="footer has-background-dark">
            <div className="content has-text-centered has-text-white">
                <i>
                    <sup><i className="fas fa-quote-left"></i></sup>
                        Success is not an accident, success is actually a choice. 
                    <sup><i className="fas fa-quote-right"></i></sup>
                    &nbsp; <sub>- &nbsp;Stephen Curry</sub>
                </i>
                <p className="has-text-grey-light">
                    © {new Date().getFullYear()} Mai Hong Ngu
                </p>
            </div>
        </footer>
    )
}

export default Footer