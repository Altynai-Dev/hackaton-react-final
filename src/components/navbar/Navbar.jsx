import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import './Navbar.scss';
import { FaPowerOff, FaSearch } from "react-icons/fa";
import {checkAdmin, checkUserLogin, logout} from "../../helpers/functions";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const navigate = useNavigate();

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  return (
    <div className="navbar">
      <nav className="navbar__content">
        <div className="left">
          <div className="brand">
            <img src={logo} alt="Logo" />
          </div>
          <div className="links">
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
          
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) {
                  setShowSearch(false);
                }
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          {checkUserLogin() ? (
              <button onClick={()=>{
                logout();
                navigate('/signup')
              }}>
                <FaPowerOff />
              </button> 
              ):(
                <button onClick={()=>{
                  navigate('/login')
                }}>
                  Login
                </button>
              )}     
        </div>
      </nav>
    </div>
  );
}

