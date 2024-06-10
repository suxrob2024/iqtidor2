import React, { useState, useEffect } from 'react';
import './Footer.css'; 
import logo from './Bgimg/footer-logo.svg'

function Footer(darkMode) {
  return (
    <div className={`footerpage ${darkMode ? 'dark-mode' : ''}`} >
      <div className="footer">
        <div className="end">
          <div className="altrik a1">
            <img className='logo_end' src={logo} alt="logo academy" />
            <h1 className='text3'> Iqtidor IT Academy © “IQ NTM” 2024 | Barcha huquqlar himoyalangan.</h1>
          </div>
          <div className="altrik a2">
            <div className='alinks'>
              <a className='End_t' href="#">Akademiya haqida</a>
              <a href="">Kurslarimiz</a>
            </div>
            <h1 className='text2'> Iqtidor IT Academy — professional darajadagi yangi bilimlar markazi. Keling va kelajagingizni biz bilan birga quring!</h1>
          </div>
          <div className="altrik a3">
            <div className="infopagesall">
              <ion-icon name="map-outline"></ion-icon>
              <a className='inthe' href="https://www.google.com/maps/place/Iqtidor+IT+Academy/@39.1176378,66.8923894,18z/data=!4m7!3m6!1s0x3f4cbb686357ed39:0xfd13d5677a926088!4b1!8m2!3d39.1175858!4d66.8936554!16s%2Fg%2F11stzb23zz?entry=ttu" target='_blank'>Manzil: Kitob, Qashqadaryo, Uzbekistan</a>
            </div>
            <div className="infopagesall">
              <ion-icon name="mail-outline"></ion-icon>
              <a className='inthe' href="mailto:info@iqeducation.uz">info@iqeducation.uz</a>
            </div>
            <div className="infopagesall">
              <ion-icon name="call-outline"></ion-icon>
              <a className='inthe' href="tel:+998907884880">+998 90 788 48 80</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
