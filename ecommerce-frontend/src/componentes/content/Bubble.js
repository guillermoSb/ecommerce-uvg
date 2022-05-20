import React, { Component } from "react";
import Avatar from "../resources/Avatar";

export default class Bubble extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        var today = new Date(),
            time = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes();
        this.state = { user: this.use, text: '', currentTime: time }
    }
    render() {
        return (
            <div
                style={{ animationDelay: '0.5s' }}
                className={`chat-bubble ${this.props.user ? this.props.user : ""}`}
            >
                <div className="chat-bubble-content">
                    <div className="chat-msg">{this.props.text}</div>
                    <div className="chat-desc">
                        <i>{this.state.currentTime}</i>

                    </div>
                </div>
                {/* <Avatar image={this.props.image} /> */}
            </div>
        );
    }
}