import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { clearStatusState } from '../../store/account/accountSlice';
import { registerAccount } from '../../store/account/accountActions';
import { Link, useNavigate } from 'react-router-dom';
import "./Signup.scss";

const Signup = () => {
    const [formValues, setFormValues] = useState({
      email: "",
      password: "",
      password2: ""
    });

    const {loading, status} = useSelector((state) => state.account);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(clearStatusState())
      }, []);
    
      const handleSignIn = async (e) => {
        e.preventDefault();
        dispatch(registerAccount({formValues, navigate}));
      };
  
  return (
    <>
      {loading ? "Loading..." : (
        <>
          {status ? (
            <div>
              <h3>An error occured!</h3>
              <button onClick={() => dispatch(clearStatusState())}>Try again!</button>
            </div>
          ) : (
            <div className="register">
              <div className="top">
                <div className="wrapper">
                  <img
                    className="logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                    alt=""
                  />
                  <button onClick={()=>{
                    navigate('/login')}} className="loginButton">Sign In</button>
                </div>
              </div>
              <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                  Ready to watch? Enter your email to create or restart your membership.
                </p>

                <div className="form">
                  <input
                    type="email"
                    placeholder="Email address"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        email: e.target.value,
                      })
                    }
                    name="email"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        password: e.target.value,
                      })
                    }
                    name="password"
                  />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) =>
                      setFormValues({
                        ...formValues,
                        password2: e.target.value,
                      })
                    }
                    name="password2"
                  />
                  <button className='registerButton' onClick={handleSignIn}>Get Started</button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Signup

