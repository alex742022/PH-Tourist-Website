import React from "react";

export default function Header(props){
    
    return(

        <div className="header-container">
            <h2>Top 10 |</h2>
            <h1>Tourist Spot in Philippines</h1>
            <div className="light-and-dark-container">
                <img 
                src={props.darkMode ? "./images/sun.png" : "./images/moon.png"}
                alt="darkmode and lightmode"
                onClick={props.darkModeButton}
                />
            </div>
        </div>
    )
}