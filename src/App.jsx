import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="container">
      <Menu />
      <div className="main">
        <Navbar />
        <div className="wrapper">
          video cards
        </div>
      </div>
    </div>
  )
}

export default App;
