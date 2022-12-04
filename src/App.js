import './App.css';
import React from 'react';
import Nav from './components/nav'
import Section from './components/section'
import TouristData from './components/tourist-data' 
import LandingPage from './components/landingPage'
import Footer from './components/footer';

function App() {
  const sectionData = TouristData.map(tourist =>{
    return <Section key={tourist.id} {...tourist}/>
  })

  // darkmode useState
  const [darkMode, setDarkMode] = React.useState(false)

    const darkLight = () => {
        setDarkMode(prevDarkmode => !prevDarkmode)
    }

  return (
    <div className="App">
        <Nav 
        darkModeButton={darkLight}
        darkMode={darkMode}
        />
        <LandingPage/>
        <section id="content" className={darkMode ? "darkmode" : ""}>
          {sectionData}
        </section>
        <Footer/>
    </div>
  );
}

export default App;
