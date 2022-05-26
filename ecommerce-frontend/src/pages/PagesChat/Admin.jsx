import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllChats } from "../../services/api.service";

function Admin() {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const fetchAllChats = async () => {
      const waitingChats = await getAllChats("espera");
      const activeChats = await getAllChats("activo");
      console.log(waitingChats);
      if (waitingChats.ok && activeChats.ok) {
        setChats([...chats, ...waitingChats.chats, ...activeChats.chats]);
      }
      console.log(chats);
    };
    fetchAllChats();
  }, []);
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-md-3">
          <h1>Chats Disponibles</h1>
          <ul>
            {chats.map((chat) => {
              return (
                <li key={chat.id} className="chat-option">
                  <h3>{chat.id}</h3>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
}

export default Admin;
