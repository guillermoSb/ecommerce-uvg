import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import WishList from "./pages/PagesRecomendacion/WishList/WishList";
import Recomendaciones from "./pages/PagesRecomendacion/Recomendacion/Recomendaciones";
import Catalogo from './components/Catalogo';
import PaginaDetallesRec from "./pages/PagesRecomendacion/Recomendacion/PaginaDetallesRec";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/wishlist" element={<WishList />}></Route>
        <Route path="/recomendaciones" element={<Recomendaciones />}></Route>
        <Route path="/details-product/:id" element={<PaginaDetallesRec />}></Route>

        {/* <Route path="/catalogo" element={<Catalogo/>}></Route> */}
      </Routes>
    </Router>
  );
}

export default App;
