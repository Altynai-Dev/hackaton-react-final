import { useState, useEffect } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAccount} from "../../store/account/accountActions";
import { clearStatusState } from "../../store/account/accountSlice";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { loading, status } = useSelector((state) => state.account);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearStatusState());
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginAccount({user, navigate}))
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Войти</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setUser({...user, email:e.target.value})}
          />
          <input
            type="password"
            placeholder="Пароль"
            onChange={(e) => setUser({...user, password:e.target.value})}
          />
          <button className="loginButton" onClick={handleLogin}>
            Войти
          </button>
          <div>
            У вас нет учетной записи? <button onClick={()=>navigate('/animegame')}>Пройти регистрацию.</button>
          </div>
        </form>  
        <button className='forgetBtn' onClick={()=>navigate('/recovery-password')}>Забыли пароль?</button>
      </div>
    </div>
  );
}