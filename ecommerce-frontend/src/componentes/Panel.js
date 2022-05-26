import React, { useState, useRef } from 'react';
import GreenCircle from '../assets/greenCir.png';
import redCirc from '../assets/redCirc.png';
import grayCirc from '../assets/grayCirc.png';
import '../styles/PanelChat.scss';

export const Panel = () => {
  // Para encontrar al usuario

  const [user, setUser] = useState();

  return (
    <div className="panel-container">
      <div id="generalPanel">
        <div className="items-container">
          <div className="head">
            <h1>Panel de Chats</h1>
            <img className="circle" src={GreenCircle} alt="circle"></img>
            <div>Activo</div>
            <img className="circle" src={redCirc} alt="circle"></img>
            <div>Cerrado</div>
            <img className="circle" src={grayCirc} alt="circle"></img>
            <div>Abandonado</div>
          </div>
          <div className="search-container">
            <input
              id="search-bar"
              placeholder="Search chat by user name..."
              onKeyPress={(ev) => {
                if (ev.key === 'Enter') {
                  ev.preventDefault();
                  setUser('');
                  setUser(ev.target.value);
                  alert(user);
                }
              }}
            />
          </div>
          <div className="chats-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
