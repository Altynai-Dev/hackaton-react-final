import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.scss";
import { FaPowerOff} from "react-icons/fa";
import { checkUserLogin, logout } from "../../helpers/functions";
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  const [isBurgerShow, setIsBurgerShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);


  const navigate = useNavigate();

  const links = [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies" },
    { name: "Favorites", link: "/favorites" },
    { name: "Education", link: "/hiragana" },
  ];

  const handleToggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className={`navbar ${isMobile ? "mobile" : ""}`}>
      <nav className="navbar__content">
        <div className="left">
          <div className="brand">
            <img src={logo} alt="Logo" />
          </div>
          <div className={`links ${isMobile ? "mobile" : ""}`}>
            <ul>
              {links.map(({ name, link }) => (
                <li key={name}>
                  <Link to={link}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right">
          {isBurgerShow && (
            <div className="burger-menu" onClick={()=>setIsBurgerShow(false)}>
            <p><Link style={{textDecoration:'none', color:'white'}} to={'/'}>Home</Link></p>
            <p><Link style={{textDecoration:'none', color:'white'}} to={'/movies'}>Movies</Link></p>
            <p><Link style={{textDecoration:'none', color:'white'}} to={'/favorites'}>Favorites</Link></p>
          </div>
          )}

          <MenuIcon className="burgerMenu" color="white" onClick={()=>setIsBurgerShow(true)} />
          {checkUserLogin() ? (
            <button
              onClick={() => {
                logout();
                navigate("/animegame");
              }}
            >
              <FaPowerOff />
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </div>
  );
}
