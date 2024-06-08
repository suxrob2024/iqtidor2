import React, { useEffect } from 'react';
import './Section1.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import img1 from './Imgs/undraw_code_review_re_woeb.svg';
import img2 from './Imgs/undraw_coding_re_iv62.svg'
import img3 from './Imgs/undraw_firmware_re_fgdy.svg'
import img4 from './Imgs/undraw_mobile_development_re_wwsn.svg'
import img5 from './Imgs/undraw_mobile_search_jxq5.svg'
import img6 from './Imgs/undraw_publish_article_re_3x8h.svg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Section1({ darkMode }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false
  };

  useEffect(()=>{
    AOS.init({duration: 1500})
  }, [])

  return (
    <section  className={`s1 ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`header1 ${darkMode ? 'dark-mode' : ''}`}>
        <div className="page1">
          <h1 className='p1text'>BU mo`jiza emas--- </h1>
          <h1 className='p1text'>---BU </h1>
          <p className='p1home cssanimation leScaleYIn sequence'>Iqtidor</p>
        </div>
        <Slider {...settings} className="imgsall">
          <img className='page1imgs' src={img1} alt="" />
          <img className='page1imgs' src={img2} alt="" />
          <img className='page1imgs' src={img3} alt="" />
          <img className='page1imgs' src={img4} alt="" />
          <img className='page1imgs' src={img5} alt="" />
          <img className='page1imgs' src={img6} alt="" />
        </Slider>
        <h1 className='t2 cssanimation leSnake sequence' >Kurslarimizga yozilish uchun, o‘zingiz haqingizda ma’lumotni kiritib ariza qoldiring.</h1>
        <div className="tekshirish">
          <button className='s1btn'  data-aos="fade-up" data-aos-anchor-placement="top-center" >Ariza qoldirish</button>
          <button className='s1btn 2'>sertifikat holatini tekshirish</button>
        </div>
        <div className="sectr_paragraps" data-aos="fade-up-left" >
          <p className='textp'>Bugungi <span className='us_text '>kun o’rganuvchilari</span></p>
          <p className='textp'>Ertangi<span className='us_text'>Kun egalari</span></p>
          <p className='textp'>Iqtidor <span className='plus_text'>bilan</span><span className='us_text'>kelajakka qadam bos</span></p>
        </div>
        <p className='end_paragraps' data-aos="fade-up-right" >Ertangi kun egalari bo‘lish uchun bugundan o‘rganish darkor! Biz bilan kelajak kasblarini o‘rganing! <span className='textp'>IT sohalari</span> bir-biriga juda hamohang bo‘lib siz bir sohani o‘zlashtirish jarayonini o‘zida bir necha boshqa sohalar haqida kerakli bilimlarni bir vaqtning o‘zida o‘zlashtirib borasiz.</p>
      </div>
    </section>
  );
}

export default Section1;
