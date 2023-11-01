import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Netflix from "./pages/Netflix/Netflix";
import Games from "./components/games/Games";
import Player from "./pages/PlayerPage/Player";
import SongPlayer from "./components/SongPlayer/SongPlayer";
import { Provider } from "react-redux";
import store from "./store/store";
import Details from "./pages/Details/Details";
import Seasons from "./pages/Seasons/Seasons";
import Series from "./pages/Series/Series";
import CreateVideo from "./pages/Create/CreateVideo";
import CreateMovie from "./pages/CreateMovie/CreateMovie";
import AnimeGame from "./components/games/AnimeGame/Animegame";
import { useEffect, useState } from "react";
import Qiuz from "./components/quiz/Quiz"
import EditVideo from "./pages/Edit/EditVideo";
import MoviePage from "./pages/MoviePage/MoviePage";
import RecoveryPassword from "./pages/RecoveryPassword/RecoveryPassword";
import PayPages from "./pages/paypage/PayPages";
import Favorites from "./pages/Favorites/Favorites";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
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
  useEffect (() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);
  
  const commands = [
    {
      command: ["Go to *", "Open *"],
      callback: (redirectPage)=>setRedirectUrl(redirectPage)
    }
  ];
  const {transcript} = useSpeechRecognition({commands});
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ['home', 'movies', 'favorites'];
  const urls ={
    home: '/',
    movies: '/movies',
    favorites: '/favorites'
  };

  if(!SpeechRecognition.browserSupportsSpeechRecognition()){
    return null;
  }

  let redirect = '';

  if(redirectUrl){
    if(pages.includes(redirectUrl)){
      redirect = <Navigate to={urls[redirectUrl]} />
    }else{
      redirect = <p>Could not find page: {redirectUrl}</p>
    }
  }
  
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/player" element={<Player/>}/>
        <Route
            path="/song"
            element={
              <SongPlayer
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
              />
            }
          />
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
      {redirect}
    </Routes>
    </BrowserRouter>
    </Provider>
    <p id="transcript">Transcript: {transcript}</p>
    <button onClick={SpeechRecognition.startListening}>Start</button>
    </>
  );
}

export default App;
