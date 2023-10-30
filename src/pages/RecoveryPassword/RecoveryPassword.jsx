import React, { useState } from 'react';
import s from './RecoveryPassword.module.css';
import { recoveryPassword, sendCode } from '../../store/videos/videosActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RecoveryPassword = () => {
    const [email, setEmail] = useState('');
    const [recoveryData, setRecoveryData] = useState({
        email: '',
        code: '',
        new_password: '',
        new_password2: ''
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSendCode = (e) => {
        e.preventDefault();
        dispatch(sendCode(email));
      };
    
      const handleRecovery = (e) => {
        e.preventDefault();
        dispatch(recoveryPassword({recoveryData}));
        navigate('/login');
      };
  return (
    <div className={s.recovery}>
      <div className={s.top}>
        <div className={s.wrapper}>
          <img
            className={s.logo}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className={s.container}>
        <form className={s.form}>
          <h1 className={s.title}>Восстановление пароля</h1>
          <input
           className={s.input}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendCode} className={s.recoveryBtn}>
            Отправить код
          </button>    
        </form> 
        <form className={s.form}>
           <input className={s.input} type="email" placeholder='Email' onChange={(e)=>setRecoveryData({...recoveryData, email: e.target.value})} />
           <input className={s.input} type="text" placeholder='Код подтверждения' onChange={(e)=>setRecoveryData({...recoveryData, code: e.target.value})} />
           <input className={s.input} type="email" placeholder='Новый пароль' onChange={(e)=>setRecoveryData({...recoveryData, new_password: e.target.value})} />
           <input className={s.input} type="email" placeholder='Подтвердить пароль' onChange={(e)=>setRecoveryData({...recoveryData, new_password2: e.target.value})} />
           <button onClick={handleRecovery} className={s.recoveryBtn}>Войти</button>
        </form> 
      </div>
    </div>
  )
}

export default RecoveryPassword

