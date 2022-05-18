import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./components/login";
import Signup from "./components/signup";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
