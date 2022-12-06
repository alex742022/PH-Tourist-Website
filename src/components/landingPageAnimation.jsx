import React from "react";
import ReactLoading from "react-loading";
import "./landingPageStyles.css";
export default function LandingPageAnimation() {
  return (
    <div className="animation">
      <ReactLoading
        type={"spinningBubbles"}
        color={"gray"}
        height={67}
        width={67}
      />
    </div>
  );
}
