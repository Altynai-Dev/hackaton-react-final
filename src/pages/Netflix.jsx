import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom/dist";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";

const Netflix = () => {
  const [isCrolled, setIsScrolled] = useState(false);

  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <Container>
      {/* <Navbar isCrolled={isScrolld} /> */}
      <div className="hero">
        {/* <img
          src={backCraundImage}
          alt="background"
          className="background-image"
        /> */}
        <div className="container">
          <div className="logo">
            {/* <img src={MovieLogo} alt="Movie Logo" /> */}
          </div>
          <div className="buttons flex">
            <button
              className="flex j-center a-center"
              onClick={() => navigate("/player")}
            >
              <FaPlay /> Play
            </button>
            <button className="flex j-center a-center">
              <AiOutlineInfoCircle /> More Info
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Netflix;
