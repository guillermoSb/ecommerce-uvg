import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PanelChat from './components/PanelChat';

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
