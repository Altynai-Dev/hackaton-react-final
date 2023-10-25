import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Netflix from "./pages/Netflix";
import Games from "./games/Games";
import Cards from "./games/Cards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
