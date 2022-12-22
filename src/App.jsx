import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokedex from "./pages/Pokedex";
import Pokemon from "./pages/Pokemon";
import ProtectedRoutes from "./components/ProtectedRoutes";
import HomeProtected from "./components/HomeProtected";
import Footer from "./Layout/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const nameTrainer = useSelector(state => state.nameTrainer)
  
  useEffect(() => {
   localStorage.setItem("nameTrainer", nameTrainer)
  }, [nameTrainer])
  
  return (
    <div className="App">
      <Routes>

        <Route element={<HomeProtected/>}>
        <Route path="/" element={<Home />} />
        </Route>

        <Route element={<ProtectedRoutes/>}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<Pokemon />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
