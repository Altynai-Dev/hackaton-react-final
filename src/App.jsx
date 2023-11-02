import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Netflix from "./pages/Netflix/Netflix";
import Games from "./components/games/Games";
import Player from "./pages/PlayerPage/Player";
//import SongPlayer from "./components/SongPlayer/SongPlayer";
import { Provider } from "react-redux";
import store from "./store/store";
import Details from "./pages/Details/Details";
import Seasons from "./pages/Seasons/Seasons";
import Series from "./pages/Series/Series";
import CreateVideo from "./pages/Create/CreateVideo";
import CreateMovie from "./pages/CreateMovie/CreateMovie";
import AnimeGame from "./components/games/AnimeGame/Animegame";
import { useEffect, useState } from "react";
import Qiuz from "./components/quiz/Quiz";
import EditVideo from "./pages/Edit/EditVideo";
import MoviePage from "./pages/MoviePage/MoviePage";
import RecoveryPassword from "./pages/RecoveryPassword/RecoveryPassword";
import PayPages from "./pages/paypage/PayPages";
import Favorites from "./pages/Favorites/Favorites";
import Hiragana from "./components/games/Hiragana/Hiragana";

function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "./images/song-1.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      img_src: "./images/song-2.jpg",
      src: "./music/somebody-new.mp3",
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      img_src: "./images/song-3.jpg",
      src: "./music/on-n-on.mp3",
    },
    {
      title: "Song 4",
      artist: "Artist 4",
      img_src: "./images/song-4.jpg",
      src: "./music/somebody-new.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/player" element={<Player/>}/>
      <Route exact path="/" element={<Netflix />} />
      <Route path="/movies" element={<MoviePage />} />
      <Route path="/games" element={<Games />} />
      <Route path="/series/:slug" element={<Details />} />
      <Route path="/series/:slug/series" element={<Seasons />} />
      <Route path="/series/watch/:slug" element={<Series />} />
      <Route path="/createVideo" element={<CreateVideo />} />
      <Route path="/createMovie" element={<CreateMovie />} />
      <Route path="/animegame" element={<AnimeGame />} />
      <Route path="/quiz" element={<Qiuz />} />
      <Route path="/series/edit-series/:slug" element={<EditVideo />} />
      <Route path="/recovery-password" element={<RecoveryPassword />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/hiragana" element={<Hiragana />} />
      <Route path="/payment" element={<PayPages />} />

    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
