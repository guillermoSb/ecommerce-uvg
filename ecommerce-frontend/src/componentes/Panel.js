import React from 'react';
import GreenCircle from '../imgs/greenCir.png';
import redCirc from '../imgs/redCirc.png';
import grayCirc from '../imgs/grayCirc.png';
import '../styles/PanelChat.scss';

export const Panel = () => {
  return (
    <div className="panel-container">
      <div id="generalPanel">
        <div className="items-container">
          <div className="head">
            <h1>Panel de Chats</h1>
            <img className="circle" src={GreenCircle}></img>
            <div>Activo</div>
            <img className="circle" src={redCirc}></img>
            <div>Cerrado</div>
            <img className="circle" src={grayCirc}></img>
            <div>Abandonado</div>
          </div>
          <div className="search-container">
            <input id="search-bar" placeholder="Search chat..." />
          </div>
          <div className="chats-container"></div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
