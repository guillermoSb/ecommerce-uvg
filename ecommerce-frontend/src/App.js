import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PanelChat from './components/PanelChat';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<PanelChat></PanelChat>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
