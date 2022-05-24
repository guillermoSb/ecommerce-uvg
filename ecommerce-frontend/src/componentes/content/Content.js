import React, { Component, useState, createRef, useEffect } from 'react';
import './Content.css';
import Bubble from './Bubble';
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from '../../components/firebaselogin';
import { getAuth } from 'firebase/auth';
import { sendingChat } from '../../services/api.service';
import "../../styles/chat.css";

const chatState = {
    estado:"",
}

export default class Content extends Component {
    textEndRef = createRef(null);

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            messages: []
        };
        this.auth = getAuth();  // Get current firebase auth
    }

    scrollToBottom = () => {
        this.textEndRef.current.scrollIntoView(false);
    };

    componentDidUpdate() {
        this.scrollToBottom()
    }

    attachRealTimeMessageListening() {
        if (this.props.chatId) {
            onSnapshot(doc(firestore, "chats", this.props.chatId), (doc) => {
                const messages = doc.data().mensajes;
                const estado = doc.data().estado
                console.log(doc.data())
                this.setState({ messages }, function () { this.scrollToBottom() });
                console.log(estado)
            })
        }
    }

    estadoC(){
        const estado = doc.data().estado
        return estado;
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
        sendingChat(this.auth.currentUser.uid, this.props.chatId, this.state.text);
        document.getElementsByClassName('input-message')[0].value = '';
        this.setState({ text: '' });
    }

    render() {
        return (
            <div className='ChatContent'>
                <div className="text-bg4 text-sm">
                    {chatState.estado=this.estadoC}
                </div>
                <div className='content-body'>
                    <div className='chat-bubbles'>
                        {this.state.messages.map((message, index) => {
                            return (
                                <Bubble
                                    animationDelay={index + 2}
                                    key={message.date}
                                    user={this.auth.currentUser.uid === message.enviadoPor ? 'me' : 'other'}
                                    text={message.mensaje}
                                    image={""}
                                />
                            );
                        })
                        }
                        <div ref={this.textEndRef} />
                    </div>
                </div>
                <div className='content-footer'>

                    {this.props.chatId ? <>
                        <div className='sendNewMessage'>
                            <input
                                className='input-message'
                                type='text'
                                placeholder='Escriba un mensaje'
                                onChange={this.onStateChange}
                                value={this.state.text}
                            />
                            <button className='btnSendText' id='sendTextBtn' onClick={() => {
                                this.enviarMensaje();
                            }}>
                                <i className='send'>Enviar</i>
                            </button>
                        </div>
                    </> : ''}

                </div>
            </div>
        );
    }
}