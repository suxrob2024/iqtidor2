import React, { useState, useEffect } from 'react';
import './Sign.css';
function Sign({ setShowSign }) {
  const [isRegister, setIsRegister] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [account, setAccount] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [randomCode, setRandomCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showLoader, setShowLoader] = useState(false); 

  const handleRegister = () => {
    setIsRegister(true);
    setIsLogin(false);
  };

  const handleLogin = () => {
    setIsRegister(false);
    setIsLogin(true);
  };

  const handleSkip = () => {
    setShowSign(false);
  };

  const handleSignIn = () => {
    setShowLoader(true); // loaderni kursat
    if (account.length >= 8) {
      const randomCodeGenerated = Math.floor(10000 + Math.random() * 90000);
      setRandomCode(randomCodeGenerated.toString());
    } else {
      alert('Parol kamida 8 ta belgidan iborat bo‘lishi kerak.');
      setShowLoader(false); // loader
    }
  };

  const verifyCode = () => {
    if (verificationCode === randomCode) {
      const userData = {
        name: name,
        password: account,
        code: randomCode
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      setIsVerified(true);
      setTimeout(() => {
        setShowSign(false);
      }, 3000); // 3 soniya kutish
    } else {
      alert('Kiritilgan maʼlumot noto‘g‘ri.');
      setShowLoader(false); // loaderni yashirish
    }
  };

  return (
    <>
      <div className="Register">
        {!isRegister && !isLogin && (
          <>
            <h1 className='R-text'>Register</h1>
            <div className="Reg-Log">
              <button id='sigin' onClick={handleRegister}><ion-icon name="reader-outline"></ion-icon>Roʻyxatdan oʻtish</button>
              <button id='login' onClick={handleLogin}>Kirish<ion-icon name="enter-outline"></ion-icon></button>
              <button id='skip' onClick={handleSkip}>Oʻtkazib yuborish<ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div>
          </>
        )}

        {isRegister && (
          <>
            <div className="SignIn">
              <h1 className='s_text'>Roʻyxatdan oʻtish</h1>
              <input className='name inputtt' type="text" placeholder="Ism" value={name} onChange={(e) => setName(e.target.value)} />
              <input className='email inputtt' type="password" placeholder="Parol (kod)" value={account} onChange={(e) => setAccount(e.target.value)} />
              {passwordError && <p className='error'>{passwordError}</p>}
              <div className="chekker">
                <input className='cheked' type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
                <h1 className='s_chek'>Men shartlar va qoidalarga roziman</h1>
              </div>
              {!randomCode && <button onClick={handleSignIn} disabled={!isChecked}>Sign In</button>}
              {randomCode && (
                <div className='werffy'>
                  <input className='werify inputtt' type="text" placeholder="Generated Code" value={randomCode} readOnly />
                  <input className='werify inputtt' type="text" placeholder="Verification Code" value={verificationCode} onChange={(e) => setVerificationCode(e.target.value)} />
                  <button onClick={verifyCode}>Sign in</button>
                </div>
              )}
              <h1 className='next_s'>Men allaqachon roʻyxatdan oʻtganman <a onClick={handleLogin}>Kirish</a></h1>
            </div>
          </>
        )}

        {isLogin && (
          <>
            <div className="Login">
              <h1 className='s_text'>Kirish</h1>
              <input className='log_name inputtt' type="text" placeholder="Ism" value={name} onChange={(e) => setName(e.target.value)} />
              <input className='log_email inputtt ' type="password" placeholder="Parol (kod)" value={account} onChange={(e) => setAccount(e.target.value)} />
              <button onClick={() => {
                const storedUserData = JSON.parse(localStorage.getItem('userData'));
                if (storedUserData && storedUserData.name === name && storedUserData.account === account) {
                  setShowSign(false);
                } else {
                  alert('Login failed!');
                }
              }}>Log In</button>
              <h1 className='next_s'>Men roʻyxatdan oʻtmaganman <a onClick={handleRegister}>Roʻyxatdan oʻtish</a></h1>
            </div>
          </>
        )}

        {isVerified && (
          <div className="loader"><h1 className='iq2'>Iqtidor ✔</h1></div>
        )}
        {showLoader && !isVerified && (
          <div ><h1 className='iq2'>Siz ruyhatdan utyabsiz !!!</h1></div>
        )}
      </div>
    </>
  );
}

export default Sign;
