import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Video from "./video/Video";

const Netflix = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <>
      <Navbar isScrolled={isScrolled} />
      <Video />
    </>
  );
};

export default Netflix;
