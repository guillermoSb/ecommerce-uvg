import React, { Component, useState, createRef, useEffect } from 'react';
import './Content.css';
import Bubble from './Bubble';
import { doc, onSnapshot } from "firebase/firestore";
import { firestore } from '../../components/firebaselogin';
import { getAuth } from 'firebase/auth';

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
        this.textEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    componentDidUpdate(prevProps) {
        if (this.props.chatId && prevProps.chatId !== this.props.chatId) {
            this.attachRealTimeMessageListening();  // Attach the listener for messages
        }
    }

    attachRealTimeMessageListening() {
        onSnapshot(doc(firestore, "chats", this.props.chatId), (doc) => {
            const messages = doc.data().mensajes;
            console.log(messages);
            this.setState({ messages });

        })
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                if (this.state.text !== '') {
                    this.texts.push({
                        key: 1,
                        type: '',
                        text: this.state.text,
                        image: 'https://images.pexels.com/photos/3660527/pexels-photo-3660527.jpeg',
                    });
                    this.setState({ chat: [...this.texts] });
                    this.scrollToBottom();
                    this.setState({ text: '' });
                }
            }
        });
        this.scrollToBottom();
    }
    onStateChange = (e) => {
        this.setState({ text: e.target.value });
    };

    render() {
        return (
            <div className='ChatContent'>
                <div className='content-body'>
                    <div className='chat-bubbles'>
                        {this.state.messages.map((message, index) => {
                            return (
                                <Bubble
                                    animationDelay={index + 2}
                                    key={message.fecha}
                                    user={this.auth.currentUser.uid === message.enviadoPor ? 'me' : 'other'}
                                    text={message.contenido}
                                    image={""}
                                />
                            );
                        })}
                        <div ref={this.textEndRef} />
                    </div>
                </div>
                <div className='content-footer'>

                    {this.props.chatId ? <>
                        <div className='sendNewMessage'>
                            <input
                                type='text'
                                placeholder='Escriba un mensaje'
                                onChange={this.onStateChange}
                                value={this.state.text}
                            />
                            <button className='btnSendText' id='sendTextBtn'>
                                <i className='send'>Enviar</i>
                            </button>
                        </div>
                    </> : ''}

                </div>
            </div>
        );
    }
}