import React, { useEffect, useState } from "react"
import Music from "../assets/music.webm";
import LandingPageAnimation from "./landingPageAnimation"
import VidFile from "../assets/ph-video.mp4"
export default function LandingPage() {
  // page load
  const [loadPage, setPage] = useState(true)
  const [vid, setVid] = useState(null)
  const [overLay, setOverlay] = useState(true)

  useEffect(() => {
    if (VidFile) {
      setVid(VidFile)
      setTimeout(() => {
        setPage(false)
      }, 2000)
      setTimeout(() => {
        setOverlay(false)
      }, 2500)
    } else {
      setPage(true)
    }
  }, [])
  console.log(vid)

  return (
    <section className="landing-page">
      {loadPage ? (
        <LandingPageAnimation />
      ) : (
        <>
          {overLay ? "" : <div className="overlay"></div>}
          <video src={vid} muted autoPlay loop type="video/mp4"></video>
          <div className="landing-container">
            <div className="text-container">
              <h1 className="text">EXPLORE THE PHILIPPINES</h1>
              <p>
                Tourists can visit the Philippines without a visa if staying in
                the country for 21 days or less; provided tourists have a
                passport that is valid for at least 6 months and a return ticket
                or a ticket to another destination outside the Philippines.
              </p>
              <a href="#content">
                <button>DISCOVER</button>
              </a>
              <div className="audio-container">
                <audio controls>
                  <source src={Music} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
