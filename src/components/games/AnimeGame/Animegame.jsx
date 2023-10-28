import React, { useState, useEffect } from "react";
import styles from "./Anime.module.css";

const AnimeGame = () => {
  const [score, setScore] = useState(5);
  const [animeCharacter, setAnimeCharacter] = useState({});

  useEffect(() => {
    generateRandomCharacter();
  }, []);

  const generateRandomCharacter = () => {
    const characters = [
      {
        id: 1,
        name: "Konan",
        image:
          "https://pm1.aminoapps.com/6846/692dcdcf54f236a79ebee1dffa29e53de08a57eev2_00.jpg",
      },
      {
        id: 2,
        name: "Lapras",
        image: "https://www.film.ru/sites/default/files/images/09(167).jpg",
      },
      {
        id: 3,
        name: "Ivankov Emporio",
        image: "https://gen.jut.su/uploads/preview/3/0/0/5/483_1537189436.jpg",
      },
      {
        id: 4,
        name: "Lilinett",
        image:
          "https://playerman.ru/wp-content/uploads/0011248c4010c2c2ae312e6cf6c4890d.jpg",
      },
      {
        id: 5,
        name: "Juuzou Suzuya",
        image:
          "https://cdn.nur.kz/images/1200x675/fb1e98899e846568.jpeg?version=3",
      },
      {
        id: 6,
        name: "Rui",
        image:
          "https://i.pinimg.com/736x/70/c3/24/70c3245307304904537b1a3014ffb960.jpg",
      },
      {
        id: 7,
        name: "Garou",
        image:
          "https://anime-fans.ru/wp-content/uploads/2022/02/Krutye-arty-Garu-iz-anime-Vanpanchmen-luchshaya-podborka-12.jpg",
      },
      {
        id: 8,
        name: "Zeke",
        image:
          "https://anime-fans.ru/wp-content/uploads/2022/01/Art-kartinki-Zik-Ataka-titanov-2.jpg",
      },
      {
        id: 9,
        name: "Kuroo Tetsuro",
        image:
          "https://img.wattpad.com/23ea8da1459e8d1cf305e92d6c44449412798348/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f72564662754462453168784c39773d3d2d3934383635333438392e313633323338643235643537316330323334373737383832383237352e6a7067",
      },
      {
        id: 10,
        name: "Ryousuke Kira",
        image:
          "https://desu.shikimori.one/uploads/poster/characters/178720/main_2x-bea6a57ea6a665e6d59f9cf63849467d.webp",
      },
    ];
    const randomCharacter =
      characters[Math.floor(Math.random() * characters.length)];
    setAnimeCharacter(randomCharacter);
  };

  const handleButtonClick = (character) => {
    if (character === animeCharacter.name) {
      setScore((prevScore) => prevScore + 1);
      alert("Вы угадали!");
    } else {
      alert("Вы не угадали!");
    }
    generateRandomCharacter();
  };

  return (
    <div>
      <h1>Anime Game</h1>
      <h2>Score: {score}</h2>
      <img
        src={animeCharacter.image}
        alt="anime character"
        className={styles.img}
      />

      <button onClick={() => handleButtonClick("Konan")}>Konan</button>
      <button onClick={() => handleButtonClick("Lapras")}>Lapras</button>
      <button onClick={() => handleButtonClick("Ivankov Emporio")}>
        Ivankov Emporio
      </button>
      <button onClick={() => handleButtonClick("Lilinett")}>Lilinett</button>
      <button onClick={() => handleButtonClick("Juuzou Suzuya")}>
        Juuzou Suzuya
      </button>
      <button onClick={() => handleButtonClick("Rui")}>Rui</button>
      <button onClick={() => handleButtonClick("Garou")}>Garou</button>
      <button onClick={() => handleButtonClick("Zeke")}>Zeke</button>
      <button onClick={() => handleButtonClick("Kuroo Tetsuro")}>
        Kuroo Tetsuro
      </button>
      <button onClick={() => handleButtonClick("Ryousuke Kira")}>
        Ryousuke Kira
      </button>
    </div>
  );
};

export default AnimeGame;
