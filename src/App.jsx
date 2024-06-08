import React, { useState, useEffect } from 'react';
import Navbar from './Pages/Navbar/Navbar';
import './App.css';
import Sectr1 from './Pages/Sectr1/Section1';
import Rocetdark from './assets/rocket.png';
import Rocetlight from './assets/startup.png';
import Courses from './Pages/Courses/Kurslar';
import Footer from './Pages/Footer/Footers';
import Sign from './Pages/REG/Sign';
import Tarmoqlar from './Pages/Marketing/Marketing';
import Mentors from './Pages/Mentorlar/Mentor';
import Reading from './Pages/Reading/Reading';
import Abought from './Pages/It/Academy';

function App() {
  const [showSlider, setShowSlider] = useState(true);
  const [showReading, setShowReading] = useState(false);
  const [showSign, setShowSign] = useState(false);
  const [showAbought, setShowAbought] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // Track scroll position
  const [rocketVisible, setRocketVisible] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleScroll = () => {
    setScrollPosition(window.scrollY); 
    if (window.scrollY > 300) {
      setRocketVisible(true); // Show rocket on scroll
    } else {
      setRocketVisible(false); // Hide rocket
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlider(false);
    }, 3000); // soniya

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`ALLContent ${darkMode ? 'dark-mode' : ''}`}>
      {showSlider && (
        <div className="loader"><h1 className=' iq2'>Iqtidor</h1></div>
      )}
      {!showSlider && (
        <>
          {rocketVisible && (
            <div className='rocet' style={{ transform: `translateY(${scrollPosition > 300 ? '0' : '-100%'})` }} onClick={scrollToTop}>
              <img className='R1' src={Rocetlight} alt="Rocket" />
              <img className='R2' src={Rocetdark} alt="" />
            </div>
          )}
          <Navbar
            setShowReading={setShowReading}
            setShowSign={setShowSign}
            setShowAbought={setShowAbought}
            toggleDarkMode={toggleDarkMode}
            darkMode={darkMode}
          />
          {!showReading && !showSign && !showAbought && (
            <div className='container'>
              <Sectr1 darkMode={darkMode} />
              <Courses darkMode={darkMode} />
              <Mentors darkMode={darkMode} />
              <Tarmoqlar darkMode={darkMode} />
            </div>
          )}
          {showReading && <Reading darkMode={darkMode} />}
          {showSign && <Sign />}
          {showAbought && <Abought darkMode={darkMode} />}
          <Footer darkMode={darkMode} />
        </>
      )}
    </div>
  );
}

export default App;
