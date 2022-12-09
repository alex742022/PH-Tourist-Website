import React from "react";
import Light from "../assets/images/sun.png"
import Moon from "../assets/images/moon.png"
export default function Header(props){
    
    return(

        <div className="header-container">
            <h2>Top 10 |</h2>
            <h1>Tourist Spot in Philippines</h1>
            <div className="light-and-dark-container">
                <img 
                src={props.darkMode ? Light : Moon}
                alt="darkmode and lightmode"
                onClick={props.darkModeButton}
                />
            </div>
        </div>
    )
}