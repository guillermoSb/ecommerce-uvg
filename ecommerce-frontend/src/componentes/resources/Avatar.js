import React, { Component } from "react";
import "./Avatar.css"
export default class Avatar extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="avatar">
                <div className="avatar-img">
                    <img src={this.props.image} alt="avatar" />
                </div>
            </div>
        );
    }
}