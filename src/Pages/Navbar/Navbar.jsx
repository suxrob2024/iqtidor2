import React, { useRef } from 'react';
import './Navbar.css';
import moon from './icon/free-icon-moon-and-stars-7170886.png';
import sun from './icon/free-icon-sun-rays-3386349.png';
import logo from './icon/logo-iq.svg';

function Navbar({ setShowReading, setShowSign, toggleDarkMode, darkMode, setShowAbought, }) {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.add("responsive_nav");
  };

  const hideNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const windowScroll = (top) => {
    window.scroll({
      top: top,
      behavior: 'smooth'
    });
    navRef.current.classList.remove("responsive_nav");
  };

  const resetView = () => {
    setShowReading(false);
    setShowSign(false);
    setShowAbought(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`Heder1 ${darkMode ? 'dark-mode' : ''}`}>
        <img src={logo} alt="Logo" className="logo" onClick={resetView} />
        <nav ref={navRef}>
          <button className='kk2' onClick={() => windowScroll(1110)}>
            <ion-icon name="grid-outline"></ion-icon> Kurslarimiz
          </button>
          <button className='kk2' onClick={() => windowScroll(1750)}>
            <ion-icon name="people-circle-outline"></ion-icon> Uqituvchilar
          </button>
          <button className='kk2'onClick={() => setShowAbought(true)}>
            <ion-icon name="pricetag-outline"></ion-icon> Academiya haqida
          </button>
          <button className="nav-btn close-btn" onClick={hideNavbar}>
            <ion-icon name="close-outline" className="moon"></ion-icon>
          </button>
          <label className='Toggle tg2'>
            <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
            <img className='Sun' src={sun} alt="sun" />
            <img className='Moon' src={moon} alt="moon" />
          </label>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <ion-icon name="grid-outline"></ion-icon>
        </button>
        <button className='kk2' onClick={() => setShowReading(true)}>
          <ion-icon name="calendar-outline"></ion-icon> Kurslarga Yozilish
        </button>
        <button className='btn3' onClick={() => setShowSign(true)}>Sign in</button>
        <label className='Toggle tg1'>
          <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
          <img className='Sun' src={sun} alt="sun" />
          <img className='Moon' src={moon} alt="moon" />
        </label>
      </header>
    </>
  );
}

export default Navbar;

