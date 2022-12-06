import React from "react";

import FooterPc from "../assets/footer.jpg";

export default function Footer() {
  return (
    <footer>
      <div className="img-container">
        <div className="overlay-footer"></div>
        <img src={FooterPc} alt="Footer Img" />
        <div className="text-footer-container">
          <h1>WHAT ARE YOU WAITING FOR?</h1>
          <p>Travel and Explore!</p>
        </div>
      </div>
    </footer>
  );
}
