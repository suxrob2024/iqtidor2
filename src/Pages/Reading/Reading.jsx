import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './Reading.css';

function Reading({ darkMode }) {
  const [value, setValue] = useState('');
  const [courses, setCourses] = useState([]);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/Kurslar')
      .then(response => response.json())
      .then(data => setCourses(data))
      .catch(error => console.error('Error fetching courses:', error));
  }, []);

  const handleCheckboxChange = (id) => {
    setSelectedCourseId(id === selectedCourseId ? null : id);
  };

  const handleSubmit = () => {
    if (!selectedCourseId || !userName || !value) {
      alert('Iltimos ketmaketlikni bajaring');
    } else {
      alert('Malumot yuborildi');
      // Clear the inputs and reset the state
      setSelectedCourseId(null);
      setUserName('');
      setValue('');
    }
  };

  return (
    <div className={`Sectr ${darkMode ? 'dark-mode' : ''}`}>
      <div className="R1">
        <h1 className={`ky ${darkMode ? 'dark-mode' : ''}`}>Kurslarimizga yoziling!</h1>
      </div>
      <div className="intigration_bar">
        <div className="kurslar_check">
          {courses.map(course => (
            <div
              key={course.id}
              className={`chec ${selectedCourseId === course.id ? 'checked' : ''}`}
              onClick={() => handleCheckboxChange(course.id)}
            >
              <div className="kurslar2">
                <img className='img_kurs2' src={course.img} alt={course.abought} />
                <h1 className='kurs_text2'>{course.abought}</h1>
              </div>
              <input
                className='chekbox'
                type="checkbox"
                checked={selectedCourseId === course.id}
                onChange={() => handleCheckboxChange(course.id)}
              />
            </div>
          ))}
        </div>
        <div className="user">
          <div className='user_write'>
            <h1 className='user_n'>Ism va Familiyangiz</h1>
            <input
              className='user_name'
              type="text"
              placeholder='Ism Familyangizni kriting'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className='user_call'>
            <h1 className='user_n'>Telefon raqamingiz</h1>
            <PhoneInput
              className='user_tell'
              placeholder="Enter phone number"
              value={value}
              onChange={setValue}
            />
          </div>
          <button className='Send' onClick={handleSubmit}>Yuborish</button>
        </div>
      </div>
    </div>
  );
}

export default Reading;
