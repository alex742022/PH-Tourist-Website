import React from "react";

export default function Section(props) {
  return (
    <div className="section-container">
      <div className="content-section-flex">
        <div className="image-container">
          <img src={props.image} alt="boracay" />
        </div>
        <div className="paragraph-container">
          <h1>{props.location}</h1>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
