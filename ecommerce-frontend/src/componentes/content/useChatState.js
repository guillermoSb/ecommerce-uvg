import React, { useState } from 'react';
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import {db} from "../../../../ecommerce-backend/src/firebase"

const useChatState = () => {
    const [chatState, setChatState] = useState({});

    const getChatState = async (id) => {
        const snapshot = await getDoc(doc(db,"chats",id))
        if (snapshot.exists()) {
          const data = snapshot.data()
          setChatState(prevState => ({
            ...prevState,
            [snapshot.id]: {
                id: snapshot.id,
                atendidoPor: data.atendidoPor,
                estado: data.estado,
                fechaFin: data.fechaFin,
                fechaInicio: data.fechaInicio,
                iniciadoPor: data.iniciadoPor,
                mensajes: data.mensajes
            }
          }))
        }
      }

    return{
        chatState,
        getChatState
    }
}

export default useChatState;
