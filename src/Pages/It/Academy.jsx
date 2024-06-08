import React from 'react';
import Haqida from './abought.json';
import './academy.css'; // Assuming you have a CSS file for styling

function Academy({ darkMode }) {
  const { text1, text2, logo1, logo2, img1, img2, img3 } = Haqida.Abought[0];

  return (
    <div className={`Page_Abought ${darkMode ? 'dark-mode' : ''}`}>
      <div className="text_abought1">
        <img className='round-effect2' src={img3} alt="effect" /> 
        <h1 className='site_name1'>Akademya</h1>
        <h1 className='site_name2'>Haqida</h1>
        <h4 className={`text1 ${darkMode ? 'dark-mode' : ''}`}>{text1}</h4>
      </div>
      <div className="logo_abought">
        <img className='round-effect2' src={img3} alt="effect" /> 
        <img className={`logo ${darkMode ? 'darkmode' : 'lightmode'}`} src={darkMode ? logo1 : logo2} alt="logo" />
        <img className='round-effect1' src={img3} alt="effect" /> 
      </div>
      <div className="Classes_img">
        <img src={img3} alt="Bg effect img3" className="img_effect_bg" />
        <img className='img1 room1' src={img1} alt="img1" />
        <img className='img1 room2' src={img2} alt="img2" />
      </div>
      <spam className={`end-text2 ${darkMode ? 'dark-mode' : ''}`}>{text2}
      <img className='round-effect2' src={img3} alt="effect" />     
      <img className='round-effect1' src={img3} alt="effect" />     
      </spam>
    </div>
  );
}

export default Academy;
