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
                <p>
                    <img width="512" height="96" src="https://bulma.io/images/made-with-bulma--semiwhite.png" className="bulma-image" alt="" />
                </p>
            </div>
        </footer>
    )
}

export default Footer