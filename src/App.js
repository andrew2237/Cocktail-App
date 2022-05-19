import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MenuDetails from "./pages/MenuDetails";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/:idDrink" exact element={<MenuDetails />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
