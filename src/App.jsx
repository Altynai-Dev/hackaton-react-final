import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Login from "./pages/Login";
import Signup from "./pages/Signup/Signup";
import Netflix from "./pages/Netflix";
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/" element={<Netflix />} />
    </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
