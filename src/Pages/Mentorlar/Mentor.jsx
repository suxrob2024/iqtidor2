import React, { useEffect, useState } from 'react';
import './Mentor.css';
import Uqtuvchilar from './Mentors.json';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Mentor(darkMode) {
  const [showAboughtMentors, setShowAboughtMentors] = useState(false);
  const [selectedMentorId, setSelectedMentorId] = useState(null); // Yangi state

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleImgBoxClick = (id) => { // id ni qabul qilish
    setSelectedMentorId(id);
    setShowAboughtMentors(true);
  };

  return (
    <div className={`Mentors ${darkMode ? 'dark-mode' : ''}`}>
      <h1 data-aos="fade-right" className={`uptext ${darkMode ? 'dark-mode' : ''}`}>Mentorlarimiz</h1>
      {showAboughtMentors && (
        <div className="Abouht_mentors">
          {Uqtuvchilar.Mentors.map((mentor) => {
            if (mentor.id === selectedMentorId) { // Faqat tanlangan mentor
              return (
                <div className="M1" key={mentor.id}>
                    <div className="texts">
                        <h1 data-aos="fade-down" className="mentor_name">{mentor['mentor-name']}</h1>
                        <h2 data-aos="fade-right"  className="mentors_job">  --  {mentor['mentor-job']}</h2>
                    </div>
                  <div className="mentorimg" data-aos="fade-up">
                    <img
                      className='mentor_img2'
                      src={mentor.img}
                      alt={mentor['mentor-name']}
                      onClick={() => setShowAboughtMentors(false)} // Aboughtni yopish
                    />
                  </div>
                </div>
              );
            }
            return null; // Boshqa mentorlar uchun narsa chiqarmaymiz
          })}
        </div>
      )}
      <div className={`unslider ${darkMode ? 'dark-mode' : ''}`} data-aos="fade-up-right" >
        <Slider  className="slider_mentors" {...settings}>
            {Uqtuvchilar.Mentors.map((mentor) => (
            <div data-aos="fade-left" className="imgbox" key={mentor.id} onClick={() => handleImgBoxClick(mentor.id)}> {/* id ni uzatish */}
                <img
                data-aos="zoom-out-left"
                className='mentor_img1'
                src={mentor.img}
                alt={mentor['mentor-name']}
                />
            </div>
            ))}
        </Slider>
      </div>
      <div className="Card-mentors">
        {Uqtuvchilar.Mentors.map((mentor) => (
          <div className='Card' key={mentor.id}>
            <img className='mentor_img1' src={mentor.img} alt="mentor" />
            <div className="info-mentor">
              <h1 className='mmm'>{mentor['mentor-name']}</h1>
              <h1 className='mmm'> {mentor['mentor-job']}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentor;

