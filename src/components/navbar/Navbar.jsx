import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchVal } from "../../store/videos/videosSlice";
import { getVideos } from "../../store/videos/videosActions";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.scss";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { checkAdmin, checkUserLogin, logout } from "../../helpers/functions";
import VideoSearch from "../videoSearch/VideoSearch";

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const navigate = useNavigate();

  // serach
  const { search } = useSelector((state) => state.videos);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!search) {
      setSearchValue("");
    }
  }, [search]);

  const links = [
    { name: "Home", link: "/" },
    { name: "Movies", link: "/movies" },
    { name: "Favorites", link: "/favorites" },
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
              <FaSearch
                onClick={() => {
                  dispatch(setSearchVal({ search: searchValue }));
                  dispatch(getVideos());
                }}
              />
            </button>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setShowSearch(false);
                setInputHover(false);
              }}
            />
          </div>
          <div>{/* <VideoSearch /> */}</div>
          {checkUserLogin() ? (
            <button
              onClick={() => {
                logout();
                navigate("/signup");
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
