import React, { Component, useState, createRef, useEffect } from 'react';
import './Content.css';
import Bubble from './Bubble';
import { doc, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../firebase';
import { getAuth } from 'firebase/auth';
import { sendingChat } from '../../services/api.service';
import '../../styles/chat.css';

export default class Content extends Component {
  textEndRef = createRef(null);

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      estado: '',
      messages: [],
    };
    this.auth = getAuth(); // Get current firebase auth
  }

  scrollToBottom = () => {
    this.textEndRef.current.scrollIntoView(false);
  };

  componentDidUpdate() {
    this.scrollToBottom();
  }

  attachRealTimeMessageListening() {
    if (this.props.chatId) {
      onSnapshot(doc(firestore, 'chats', this.props.chatId), (doc) => {
        const messages = doc.data().mensajes;
        const estado = doc.data().estado;
        this.setState({ messages, estado }, function () {
          this.scrollToBottom();
        });
      });
    }
  }

  componentDidMount() {
    this.attachRealTimeMessageListening();
    document.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        this.enviarMensaje();
      }
    });
  }

  onStateChange = (e) => {
    this.setState({ text: e.target.value });
  };

  enviarMensaje = () => {
    if (this.auth.currentUser.email && this.props.text !== '') {
      sendingChat(
        this.auth.currentUser.email,
        this.props.chatId,
        this.state.text
      );
      document.getElementsByClassName('input-message')[0].value = '';
      this.setState({ text: '' });
    }
  };

  // on first load send welcome message from the system
  sendWelcomeMessage() {
    sendingChat('system', this.props.chatId, 'Bienvenido a nuestro chat');
  }

  render() {
    return (
      <div className="ChatContent">
        <div className="text-[#FFF] text-sm bg-bg2 rounded-3xl w-16 text-center shadow-2xl border-2 border-bg3 m-2">
          {this.state.estado}
        </div>
        <div className="content-body">
          <div className="chat-bubbles">
            {this.state.messages.map((message, index) => {
              return (
                <Bubble
                  animationDelay={index + 2}
                  key={message.date}
                  name={message.enviadoPor}
                  user={
                    this.auth.currentUser.email === message.enviadoPor
                      ? 'me'
                      : 'other'
                  }
                  text={message.mensaje}
                  image={''}
                />
              );
            })}
            <div ref={this.textEndRef} />
          </div>
        </div>
        <div className="content-footer">
          {this.props.chatId ? (
            <>
              <div className="sendNewMessage">
                <input
                  className="input-message"
                  type="text"
                  placeholder="Escriba un mensaje"
                  onChange={this.onStateChange}
                  value={this.state.text}
                  disabled={this.state.estado === 'inactivo' ? true : false}
                />
                <button
                  className="btnSendText"
                  id="sendTextBtn"
                  onClick={() => {
                    this.enviarMensaje();
                  }}
                  disabled={this.state.estado === 'inactivo' ? true : false}
                >
                  <i
                    className="send"
                    disabled={this.state.estado === 'inactivo' ? true : false}
                  >
                    Enviar
                  </i>
                </button>
              </div>
            </>
          ) : (
            ''
          )}
        </div>
      </div>
    );
  }
}
