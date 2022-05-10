import React from 'react';
import pp from '../img/pp.jpg';
import './style.scss';
const App = () => (
  <>
    <body>
      <div className="all-container">
        <div id="left-panel">
          <img src={pp} id="pp"></img>
          <div className="options-container">
            <a href="" className="option">
              Home
            </a>
            <a href="" className="option">
              Chats
            </a>
            <a href="" className="option">
              Settings
            </a>
            <a href="" className="option">
              Logout
            </a>
          </div>
        </div>
      </div>
    </body>
  </>
);

export default App;
