import React from 'react';
import pp from '../img/pp.jpg';
import './leftPanel.scss';

/*Component LeftPanel */
export default function LeftPanel({ home, self, settings, logout }) {
  return (
    <div className="leftPanel">
      <img src={pp} id="pp"></img>
      <div className="options-container">
        <a id="home" href={home} className="option">
          Home
        </a>
        <a id="self" href={self} className="option">
          Chats
        </a>
        <a id="Settings" href={settings} className="option">
          Settings
        </a>
        <a id="logout" href={logout} className="option">
          Logout
        </a>
      </div>
    </div>
  );
}
