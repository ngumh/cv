import React from "react";
import Badge from "../elements/Badge";
import Resume from "../../resume.json";

function AboutMe() {
  return (
    <section className="section has-background-black-ter" id="aboutMe">
      <div className="container has-text-centered">
        <p className="subtitle is-4 has-text-white has-text-weight-bold">
          {Resume.basics.x_title}
        </p>
        <figure className="image container is-128x128" style={{marginBottom: "10px"}}>
          <img
            src={Resume.basics.picture}
            alt={Resume.basics.name}
            className="is-rounded"
          />
        </figure>
        <p className="subtitle is-5 has-text-white has-text-weight-light summary-text">
          {Resume.basics.summary}
        </p>
        <div className="container interests">
          <div className="field is-grouped is-grouped-multiline has-text-centered">
              {Resume.interests.map((value, index) => {
                return <Badge key={index} text={value.name} faIcon={value.x_icon} />
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
