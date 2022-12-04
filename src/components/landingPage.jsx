import React from "react";
import Video from "../assets/ph-video.mp4";
import Music from "../assets/music.webm";
export default function LandingPage() {
  return (
    <section className="landing-page">
      <div className="overlay"></div>
      <video src={Video} muted autoPlay loop type="video/mp4"></video>
      <div className="landing-container">
        <div className="text-container">
          <h1 className="text">EXPLORE THE PHILIPPINES</h1>
          <p>
            Tourists can visit the Philippines without a visa if staying in the
            country for 21 days or less; provided tourists have a passport that
            is valid for at least 6 months and a return ticket or a ticket to
            another destination outside the Philippines.
          </p>
          <a href="#content">
            <button>DISCOVER</button>
          </a>
          <div className="audio-container">
            <audio controls autoPlay loop>
              <source src={Music} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </section>
  );
}
