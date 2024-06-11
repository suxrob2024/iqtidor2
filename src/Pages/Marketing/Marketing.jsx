import React, { useEffect, useState } from 'react';
import './Marketing.css';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Marketing({ darkMode }) {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    AOS.init({ duration: 1500 });

    // Function to handle viewport changes
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(4);
      }
    };

    // Initial check
    handleResize();

    // Adding event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  };

  return (
    <div className={`Smm ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className={`sahifa ${darkMode ? 'dark-mode' : ''}`}>Bizni ijtimoiy tarmoqlarda kuzating</h1>
      <div className={`marketingpage ${darkMode ? 'dark-mode' : ''}`}>
        <div className="marketing1">
          <div className="wrapper2">
            <div className="icon facebook">
              <div className="tooltip">Facebook</div>
              <div className="iconroom">
                <a href="#" target="_blank" rel="noopener noreferrer"><img className='fab' src="https://cdn-icons-png.flaticon.com/128/3670/3670124.png" alt="Facebook" /></a>
              </div>
            </div>
            <div className="icon twitter">
              <div className="tooltip">Twitter</div>
              <div className="iconroom">
                <a href="#" target="_blank" rel="noopener noreferrer"><img className='fab' src="https://cdn-icons-png.flaticon.com/128/3670/3670127.png" alt="Twitter" /></a>
              </div>
            </div>
            <div className="icon instagram">
              <div className="tooltip">Instagram</div>
              <div className="iconroom">
                <a href="https://www.instagram.com/iqtidor_maktabi/" target="_blank" rel="noopener noreferrer"><img className='fab' src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png" alt="Instagram" /></a>
              </div>
            </div>
            <div className="icon telegram">
              <div className="tooltip">Telegram</div>
              <div className="iconroom">
                <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer"><img className='fab' src="https://cdn-icons-png.flaticon.com/128/355/355977.png" alt="Telegram" /></a>
              </div>
            </div>
            <div className="icon discord">
              <div className="tooltip">Discord</div>
              <div className="iconroom">
                <a href="https://discord.com/" target="_blank" rel="noopener noreferrer"><img className='fab' src="https://cdn-icons-png.flaticon.com/128/3670/3670157.png" alt="Discord" /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="marketing2"></div>
      </div>
      <div className="clock">
        <div className="clock_page">
          
        </div>
      </div>
      <h1 id='ments' data-aos="zoom-in-left" className={darkMode ? 'dark-mode' : ''}>Hamkorlarimiz</h1>
      <Slider {...settings} className={`partner ${darkMode ? 'dark-mode' : ''}`}>
        <div className="hamkorlar">
          <a href="https://yoshlar.gov.uz/" target='_blank' rel="noopener noreferrer">
            <img className='hamkorlar' src="https://iqtidor.uicgroup.tech/media/company/2024/04/17/yoshlarIshlar.png" alt="Partner 1" />
          </a>
        </div>
        <div className="hamkorlar">
          <a href="https://gov.uz/digital/" target='_blank' rel="noopener noreferrer">
            <img className='hamkorlar' src="https://iqtidor.uicgroup.tech/media/company/2024/04/17/qashVilHokim.png" alt="Partner 2" />
          </a>
        </div>
        <div className="hamkorlar">
          <a href="https://qashqadaryo.uz/uz" target='_blank' rel="noopener noreferrer">
            <img className='hamkorlar' src="https://iqtidor.uicgroup.tech/media/company/2024/04/17/AKT.png" alt="Partner 3" />
          </a>
        </div>
        <div className="hamkorlar">
          <a href="https://uic.group/" target='_blank' rel="noopener noreferrer">
            <img className='hamkorlar' src="https://iqtidor.uicgroup.tech/media/company/2024/04/19/UIC_Group-01_1.png" alt="Partner 4" />
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default Marketing;
