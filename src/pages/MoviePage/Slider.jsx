import React, { useState, useEffect } from "react";

const Slider = () => {
  const images = [
    "https://i.pinimg.com/originals/82/48/32/82483210450fd8614b9e057ab08394df.gif",
    "https://i.pinimg.com/564x/31/1a/b7/311ab74809077e967b0d6d61d5e4d3d9.jpg",
    "https://i.pinimg.com/564x/bf/a0/ec/bfa0ec8014a62481c6535807a99c4dfa.jpg",
    "https://i.pinimg.com/564x/f1/25/13/f1251309e2e017bd57ab8d277faa5271.jpg",
    "https://i.pinimg.com/736x/e9/e3/f0/e9e3f07087f6ce2ea4d47e7512a49766.jpg",
    "https://i.pinimg.com/564x/70/4f/bc/704fbc54975cee75cde3899bc9b98303.jpg",
    "https://i.pinimg.com/564x/b5/f2/37/b5f23716efdb38980ec219372710fddb.jpg",
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Автоматическая смена каждые 3 секунды
    return () => clearInterval(interval);
  }, []);

  const containerStyle = {
    width: "100vw", // Задать ширину 100% вьюпорта
    height: "45vh", // Задать высоту 100% вьюпорта
    overflow: "hidden",
    position: "relative",
  };

  const imageStyle = {
    width: "100%", // Задать ширину 100%
    height: "100%", // Задать высоту 100%
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      <img src={images[activeIndex]} alt="" style={imageStyle} />
    </div>
  );
};

export default Slider
