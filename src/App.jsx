import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Netflix from "./pages/Netflix/Netflix";
import Games from "./components/games/Games";
import Player from "./pages/PlayerPage/Player";
import { Provider } from "react-redux";
import store from "./store/store";
import Details from "./pages/Details/Details";
import Seasons from "./pages/Seasons/Seasons";
import Series from "./pages/Series/Series";
import CreateVideo from "./pages/Create/CreateVideo";
import CreateMovie from "./pages/CreateMovie/CreateMovie";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/player" element={<Player/>}/>
      <Route exact path="/" element={<Netflix />} />
      <Route exact path="/games" element={<Games />} />
      <Route path="/series/:slug" element={<Details />} />
      <Route path="/series/:slug/series" element={<Seasons />} />
      <Route path="/series/watch/:slug" element={<Series />} />
      <Route path="/createVideo" element={<CreateVideo />} />
      <Route path="/createMovie" element={<CreateMovie />} />

    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
