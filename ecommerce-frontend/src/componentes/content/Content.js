import React, { Component, useState, createRef, useEffect } from 'react';
import './Content.css';
import Bubble from './Bubble';

export default class Content extends Component {
    textEndRef = createRef(null);
    texts = [
        {
            key: 1,
            image: 'https://images.pexels.com/photos/3660527/pexels-photo-3660527.jpeg',
            type: 'other',
            text: 'Bienvenido al chat',
        }
    ];

    constructor(props) {
        super(props);
        this.state = {
            chat: this.texts,
            text: '',
        };
    }

    scrollToBottom = () => {
        this.textEndRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            if (e.keyCode == 13) {
                if (this.state.text != '') {
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
                        {this.state.chat.map((textContent, index) => {
                            return (
                                <Bubble
                                    animationDelay={index + 2}
                                    key={textContent.key}
                                    user={textContent.type ? textContent.type : 'me'}
                                    text={textContent.text}
                                    image={textContent.image}
                                />
                            );
                        })}
                        <div ref={this.textEndRef} />
                    </div>
                </div>
                <div className='content-footer'>
                    <div className='sendNewMessage'>
                        <button className='addFiles'>
                            <i className='plus'>+</i>
                        </button>
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
                </div>
            </div>
        );
    }
}