import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Netflix from "./pages/Netflix/Netflix";
import Games from "./components/games/Games";
import Cards from "./components/games/Cards";
import Player from "./pages/PlayerPage/Player";
import { Provider } from "react-redux";
import store from "./store/store";

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
    </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
