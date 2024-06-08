import React, { useState, useEffect } from 'react';
import './Kurslar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import kurslarData from './data.json'; // JSON ma'lumotlarni import qilamiz

function Kurslar({ darkMode }) {
    const [expandedCourses, setExpandedCourses] = useState({});
    const [showMenu, setShowMenu] = useState(true);
    const [selectedCourse, setSelectedCourse] = useState(null);

    const toggleCourse = (id) => {
        setSelectedCourse(id); // Set selected course
        setShowMenu(false); // Hide the menu
    };

    const hideMenu = () => {
        setShowMenu(true); // Show the menu
        setSelectedCourse(null); // Clear selected course
    };

    const showBackButton = !showMenu;

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    return (
        <div className={`Kurslar ${darkMode ? 'dark-mode' : ''}`}>
            {/* JSON ma'lumotlaridan har bir kurs uchun JSX chiqaramiz */}
            <div className="KKK">
                <h1 id='kurslar' data-aos="fade-right">Kurslarimiz haqida 👇🏼</h1>
                {showBackButton && <button id='Back' onClick={hideMenu}><ion-icon name="return-up-back-outline"></ion-icon> ortga</button>}
            </div>
            <div data-aos="zoom-in" className="menu_kurslar" style={{ display: showMenu ? 'grid' : 'none' }}>
                {kurslarData.Kurslar.map(kurs => (
                    <div className="kurs" key={kurs.id} onClick={() => toggleCourse(kurs.id)}>
                        <img className='kurs_imgs' src={kurs.img} alt={kurs.abought} />
                        <h1 className={`text_kurs ${darkMode ? 'dark-mode' : ''}`}>{kurs.abought}</h1>
                    </div>
                ))}
            </div>
            <div className="Abought_Courses" style={{ display: showMenu ? 'none' : 'block' }}>
                <div className="Kurslar_abought">
                    {kurslarData.schema.map(info => (
                        <div className='all' key={info.id} style={{ display: selectedCourse === info.id ? 'grid' : 'none' }}>
                            <div className="kurs_img">
                                <img className='kurs_icon' src={info.img} alt="" />
                            </div>
                            <div className="kurs_abought">
                                <h1 className="kurs_name cssanimation leScaleYIn sequence">{info.kursname}</h1>
                                <h5 className={`kurs_info ${darkMode ? 'dark-mode' : ''}`}>{info.kursinfo}</h5>
                                <button className='kursregister'>Kursga yozilish</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="uquvkurslar">
                    <h2>Nimalar sizni kutmoqda ❔</h2>
                    <div className="uquv">
                        <img src="" alt="" />
                        <h1 className="info2"></h1>
                    </div>
                </div>
            </div>
            <div className="darslarimizda">
                <div className="Phoundaion"></div>
            </div>
        </div>
    );
}

export default Kurslar;
