import React from "react"
import NavBar from "./Navbar"
import Resume from "../../resume.json"

function Hero() {
    return (
        <section className="hero is-fullheight has-bg-image">
            <div className="hero-head">
                <NavBar />
            </div>
            <div className="hero-body">
                <div className="container">
                    <p className="subtitle is-5 has-text-white">I'm a</p>
                    <h1 className="title has-text-white">{Resume.basics.label}</h1>
                    <h2 className="subtitle has-text-white">{Resume.basics.location.region}, {Resume.basics.location.country}</h2>
                </div>
            </div>
            <div className="hero-foot" style={{paddingBottom:'20px'}}>
                <div className="columns is-mobile">
                    <div className="column is-4"></div>
                    {
                        Resume.basics.profiles.map((value, index) => {
                            return (
                                <div key={index} className="column is-2 has-text-centered">
                                    <a href={value.url} target="blank" className="is-hovered" title={value.network}>
                                        <span className="icon is-medium has-text-white">
                                            <i className={value.x_icon}></i>
                                        </span>
                                    </a>
                                </div>
                            );
                        })
                    }
                    <div className="column is-4"></div>
                </div>
            </div>
        </section>
    )
}

export default Hero