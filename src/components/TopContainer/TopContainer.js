import React, { Component } from 'react';
import Logo from "../Logo/Logo";
import './TopContainer.scss';

class TopContainer extends Component {
    render() {
        return (
            <div className="top-container">
                <Logo />
            </div>
        );
    }
}

export default TopContainer;