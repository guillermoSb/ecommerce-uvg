import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";
import Catalogo from './components/Catalogo';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Catalogo" element={<Catalogo/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
